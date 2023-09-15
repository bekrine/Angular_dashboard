import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './guard/auth.guard';
import { AppointmentComponent } from './appointment/appointment.component';
import { InfoCondidateComponent } from './info-condidate/info-condidate.component';

const routes: Routes = [
  {path:'dashboard',
  component:DashboardComponent,
  canActivate:[authGuard]
},
  {path:'login-signin',component:RegisterComponent},
  {
    path:'appointment',
    component:AppointmentComponent
  },
  {
    path:'infoCondidate/:email',
    component:InfoCondidateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
