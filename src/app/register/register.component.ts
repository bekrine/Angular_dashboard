import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms'; 
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user:any
  constructor(private formBuilder:FormBuilder,
              private toaster:ToastrService,
              private services:AuthService,
              private router:Router
              ){}
  
   passwordMatchValidator(control: { get: (arg0: string) => { (): any; new(): any; value: any; }; }) {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;
  
    if (password === confirmPassword) {
      return null; 
    } else {
      return { passwordMismatch: true }; 
    }
  }
  

// register
 userForm = this.formBuilder.group({
  id:this.formBuilder.control('',Validators.compose([Validators.required,Validators.email])),
  userName:this.formBuilder.control('', Validators.required),
  password:this.formBuilder.control('',Validators.compose( [Validators.required,Validators.minLength(6)])),
  confirmPassword:this.formBuilder.control("",[Validators.required]),
  role:this.formBuilder.control('condidate'),
  date:this.formBuilder.control(''),
  payments:this.formBuilder.control(''),
},
  { validator: this.passwordMatchValidator }

)

registration(){
  if(this.userForm.valid){
    this.services.register(this.userForm.value).subscribe(res=>{
      this.toaster.success('Register Successfly')
      this.router.navigate(['/login-signin'])

    })            
  }else{
    this.toaster.warning('Please valid data')
  }
}
// login

 userLoginForm = this.formBuilder.group({
  id:this.formBuilder.control('',Validators.compose([Validators.required,Validators.email])),
  password:this.formBuilder.control('',Validators.compose( [Validators.required,Validators.minLength(6)])),
}

)

login(){
  if(this.userLoginForm.valid){
    this.services.getUser(this.userLoginForm.value.id).subscribe(res=>{
      this.user=res
      if(this.user.password === this.userLoginForm.value.password){
        sessionStorage.setItem('email',this.user.id)
        sessionStorage.setItem('role',this.user.role)
        sessionStorage.setItem('date',this.user.date)
        if(this.user.role === 'Admin'){
          this.router.navigate(['/dashboard'])
        }else{
          this.router.navigate(['/appointment'])
        }
      }
    })

  }else{
    this.toaster.warning('Invalid credentials')
  }
}
  

}
