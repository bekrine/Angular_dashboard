import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { authGuard, authGuardAdmin } from './guard/auth.guard';
import { AppointmentComponent } from './appointment/appointment.component';
import { InfoCondidateComponent } from './info-condidate/info-condidate.component';
import { NotAuthorizedComponent } from './not-authorized/not-authorized.component';

const routes: Routes = [
  {path:'dashboard',
  component:DashboardComponent,
  canActivate:[authGuard,authGuardAdmin]
},
  {path:'',component:RegisterComponent},
  {
    path:'appointment',
    component:AppointmentComponent,
  canActivate:[authGuard]

  },
  {
    path:'infoCondidate/:id',
    component:InfoCondidateComponent,
  canActivate:[authGuard,authGuardAdmin]

  },{
    path:'notAuthorized',
    component:NotAuthorizedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
