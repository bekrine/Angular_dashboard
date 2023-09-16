import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  user: any
  constructor(private formBuilder: FormBuilder,
    private toaster: ToastrService,
    private services: AuthService,
    private router: Router
  ) { }

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
    email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
    userName: this.formBuilder.control('', Validators.required),
    password: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
    confirmPassword: this.formBuilder.control("", [Validators.required]),
    role: this.formBuilder.control('condidate'),
    date: this.formBuilder.control(''),
    payments: this.formBuilder.control(''),
  },
    { validator: this.passwordMatchValidator }

  )

  registration() {
    if (this.userForm.valid) {
      this.services.register(this.userForm.value).subscribe(res => {
        this.toaster.success('Register Successfly')
        this.router.navigate(['/'])

      })
    } else {
      this.toaster.warning('Please valid data')
    }
  }
  // login

  userLoginForm = this.formBuilder.group({
    email: this.formBuilder.control('', Validators.compose([Validators.required, Validators.email])),
    password: this.formBuilder.control('', Validators.compose([Validators.required, Validators.minLength(6)])),
  }

  )

  login() {


    this.services.getAllUsers().subscribe(res => {
      Object.values(res).forEach(user => {
        if (user.password === this.userLoginForm.value.password &&
          user.email === this.userLoginForm.value.email) {
            console.log(user)
          sessionStorage.setItem('id', user.id)
          sessionStorage.setItem('userName', user.userName)
          sessionStorage.setItem('role', user.role)
          sessionStorage.setItem('date', user.date)
          if (user.role === 'Admin') {
            this.router.navigate(['/dashboard'])
    
        } else {
            this.router.navigate(['/appointment'])
          }
        } else {
          this.toaster.warning('Invalid credentials')
        }
      })
    })


  }


}
