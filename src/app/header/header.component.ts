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
sliceUserName:string
email:string
isCondidate:boolean=false

constructor(private services:AuthService,private router:Router){}



ngOnInit(){
  
  if(this.services.isLogedIn()){
    
   this.userName=sessionStorage.getItem('userName').toString()
   let role=sessionStorage.getItem('role').toString()
   role == "condidate" ?  this.isCondidate = true : this.isCondidate = false
  this.sliceUserName=this.userName.slice(0,2).toUpperCase()
  }
  
}



logout(){
  this.services.logOut()
  this.router.navigate(['/'])
}



}
