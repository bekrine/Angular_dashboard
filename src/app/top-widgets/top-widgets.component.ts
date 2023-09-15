import { Component, OnInit } from '@angular/core';
import {
  faUser,
  faMoneyBill,
  faWarehouse
} from '@fortawesome/free-solid-svg-icons';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-top-widgets',
  templateUrl: './top-widgets.component.html',
  styleUrls: ['./top-widgets.component.css']
})
export class TopWidgetsComponent {
  faUser = faUser
  faMoneyBill = faMoneyBill
  faWarehouse = faWarehouse
  usersCountWithAppointment: number
  usersCountWithOutAppointment: number
  totalPayments: any

  constructor(private services: AuthService) {

  }

  ngOnInit() {
    this.services.getAllUsers().subscribe(res => {
      this.usersCountWithAppointment = Object.values(res).filter(val => val.role !== 'Admin').filter(val => val.date !== "").length
      this.usersCountWithOutAppointment = Object.values(res).filter(val => val.role !== 'Admin').filter(val => val.date === "").length
      this.totalPayments = Object.values(res)
        .filter(val => val.role !== 'Admin')
        .filter(val => val.payments !== '')
        .map(val => val.payments)
        .reduce((a: any, c: any) =>a + c,0)
   
    })
  }
}
