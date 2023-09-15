import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  dateNumberForm: FormGroup;
  dateNew=new Date().toISOString().split('T')[0]
  isHasAppointment:boolean
userInfo:object

  constructor(private formBuilder: FormBuilder, private services:AuthService,private toaste:ToastrService ){
    
  this.chekckIfHasAppointment()
    this.dateNumberForm = this.formBuilder.group({
      selectedDate: ['', Validators.required],
      selectedNumber: ['', [Validators.required, Validators.min(0)]], 
    });
    }

    chekckIfHasAppointment(){
      let userdate=sessionStorage.getItem('date').toString()
      let userId=sessionStorage.getItem('email').toString()
      
      if(userdate === ''){
        return this.isHasAppointment=false
      }else{
          this.services.getUser(userId).subscribe(res=>{
            let user:any
            user=res
              this.userInfo=user
            })
         return this.isHasAppointment= true
        }
      
    
    }

    upDate(){
   sessionStorage.setItem('date',"")
   window.location.reload();

    }




    onSubmit() {
      if (this.dateNumberForm.valid) {
        const selectedDate = this.dateNumberForm.get('selectedDate').value;
        const selectedNumber = this.dateNumberForm.get('selectedNumber').value;
        if(this.services.isLogedIn()){
         
          let userId=sessionStorage.getItem('email')
          let user:any
          this.services.getUser(userId).subscribe(res=>{
          user=res
          user={...user,date:selectedDate,payments:selectedNumber}
          
          this.services.updateUser(user.id,user).subscribe(res=>{
            sessionStorage.setItem('date',user.date)
            this.toaste.success('Votre date d’examen et  ')
            this.dateNumberForm.reset();
            window.location.reload();

          })

          })
        }
      
      }
    }
  

}
