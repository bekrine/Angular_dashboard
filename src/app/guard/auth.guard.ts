import { CanActivateFn } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { inject } from '@angular/core';


export const authGuard: CanActivateFn = (route, state) => {

  const service = inject(AuthService)
  const router = inject(Router)

  if(service.isLogedIn()){
    return true
  }else{
    router.navigate([''])
    return false
  }
 
};
export const authGuardAdmin: CanActivateFn = (route, state) => {

  const service = inject(AuthService)
  const router = inject(Router)

  let role = sessionStorage.getItem('role')?.toString() 

  if(service.isLogedIn() && role === 'Admin' ){
    return true
  }else{
    router.navigate(['notAuthorized'])
    return false
  }
 
};
