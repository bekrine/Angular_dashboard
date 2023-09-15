import { Component } from '@angular/core';
import {  faDashboard,
  faLocation,
  faShop,
  faBox, faUser} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  faDashboard = faDashboard;
  faLocation=faLocation;
  faShop=faShop
  faBox=faBox
  faUser=faUser

  status = false;

constructor(private services:AuthService , private router:Router) {
  
}

addToggle()
{
  this.status = !this.status;       
}


logout(){
  this.services.logOut()
  this.router.navigate(['/login-signin'])
}
}
