import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { product } from '../services/data-type';

@Component({
  selector: 'app-seller-add-product',
  templateUrl: './seller-add-product.component.html',
  styleUrls: ['./seller-add-product.component.css']
})
export class SellerAddProductComponent implements OnInit {
  addProductMessage : string | undefined;
 constructor(private productsvc : ProductService){

 }
 ngOnInit(): void {
   
 }
 submit(data: product): void{
  this.productsvc.addProduct(data).subscribe((result) =>{
   if(result){
    this.addProductMessage ="Product added successfully";
   }
  });
  setTimeout(() => {
    this.addProductMessage = undefined;
  }, 3000);
 }
}
