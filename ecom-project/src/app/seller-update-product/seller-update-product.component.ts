import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from '../services/data-type';
import { RouterTestingHarness } from '@angular/router/testing';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-seller-update-product',
  templateUrl: './seller-update-product.component.html',
  styleUrls: ['./seller-update-product.component.css']
})
export class SellerUpdateProductComponent implements OnInit {
productData : undefined | product;
productMessage : undefined | string;
constructor(private router : ActivatedRoute,
  private productSvc : ProductService) {
  
}
ngOnInit(): void {
   let productId= this.router.snapshot.paramMap.get("id");
   if(productId){
    this.productSvc.getProduct(productId).subscribe((data) => {
      this.productData = data;
   });
   }
}

submit(data:any){
  if(this.productData){
    data.id = this.productData.id;
  }
 this.productSvc.updateProduct(data).subscribe((data) =>{
   if(data){
    this.productMessage = "Product Update successfully";
   }
 });
 setTimeout(() => {
  this.productMessage = undefined;
 }, 3000);
}

}
