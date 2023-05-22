import { Component,OnInit } from '@angular/core';
import { SellerService } from '../services/seller.service';
import { login, signUp } from '../services/data-type';


@Component({
  selector: 'app-seller-auth',
  templateUrl: './seller-auth.component.html',
  styleUrls: ['./seller-auth.component.css']
})
export class SellerAuthComponent implements OnInit {
  showLogin = false;
  authError:string='';
 constructor(private sellersvc: SellerService){
 }

 ngOnInit(): void{
  this.sellersvc.reloadSeller();
 }
 signUp(data : signUp) : void{
  this.sellersvc.userSignUp(data);
 }
 openLogin(){
  this.showLogin = true;
 }
 openSignUp(){
  this.showLogin = false;
 }

 login(data: login):void{
    this.sellersvc.userLogin(data);
    this.sellersvc.isLoginError.subscribe((isError) =>{
      if(isError){
        this.authError = "Invalid User please try again!!"
      }
    });
 }
}
