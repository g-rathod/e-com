import { Injectable } from '@angular/core';
import { product } from './data-type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;
  constructor(private http : HttpClient) { 
    this.url = "http://localhost:3000/products";
  }

  addProduct(data: product){
   return this.http.post(this.url,data);
  }

  productList(){
    return this.http.get<product[]>(this.url);
  }

  deleteProduct(id:number){
    return this.http.delete(this.url+'/'+id);
  }
}
