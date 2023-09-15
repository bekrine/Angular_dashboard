import { Component,OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

userName:string
email:string
isCondidate:boolean=false

constructor(private services:AuthService,private router:Router){}



ngOnInit(){
  
  if(this.services.isLogedIn()){
    
   this.email=sessionStorage.getItem('email').toString()
   let role=sessionStorage.getItem('role').toString()
   role == "condidate" ?  this.isCondidate = true : this.isCondidate = false
  this.userName=this.email.slice(0,2).toUpperCase()
  }
  
}



logout(){
  this.services.logOut()
  this.router.navigate(['/login-signin'])
}



}
