import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../services/data-type';

@Component({
  selector: 'app-seller-home',
  templateUrl: './seller-home.component.html',
  styleUrls: ['./seller-home.component.css']
})
export class SellerHomeComponent implements OnInit{
  productList: undefined | product[];
  productMessage : undefined | string;
 constructor(private productsvc : ProductService){}
 ngOnInit(): void {
   this.loadProduct();
 }

 deleteProduct(id:number){
  this.productsvc.deleteProduct(id).subscribe((result)=>{
    if(result){
      this.productMessage="Product Deleted successfully";
      this.loadProduct();
    }
  });
  setTimeout(() => {
    this.productMessage= undefined;
  }, 3000);
 }
 loadProduct(){
  this.productsvc.productList().subscribe((result)=>{
    if(result){
      this.productList = result;
    }
   });
 }

}
