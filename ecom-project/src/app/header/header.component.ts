import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  menuType:string ="default";
  sellerName : string ="";
  constructor(private router: Router){

  }
  ngOnInit(): void {
    this.router.events.subscribe((val:any)=>{
      if(val.url){
        if(localStorage.getItem("seller") && val.url.includes('seller')){
          let strSeller = localStorage.getItem("seller");
          let sellerData = strSeller && JSON.parse(strSeller)[0];
          this.sellerName = sellerData.firstName;
          this.menuType = "seller";
        }
        else{
          this.menuType ="default";
        }
      }
    })
  }
  logout():void{
    localStorage.removeItem('seller');
    this.router.navigate(['/']);
  }
}
