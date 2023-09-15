import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  constructor(private services:AuthService){
    this.getAllusers()
  }

  Allusers:any

  getAllusers(){
    this.services.getAllUsers().subscribe(res=>{
      this.Allusers=res
    this.Allusers=this.Allusers.filter((user: { role: string; })=>user.role !== 'Admin')
    })
  }
}
