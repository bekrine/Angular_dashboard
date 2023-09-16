import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  _filteredUsers: string = '';

  constructor(private services:AuthService){
    this.getAllusers()
  }

  Allusers:any
  filterAllUsers:any

  getAllusers(){
    this.services.getAllUsers().subscribe(res=>{
      this.Allusers=res
    this.Allusers=this.Allusers.filter((user: { role: string; })=>user.role !== 'Admin')
    this.filterAllUsers = this.Allusers
    })
  }


  get filteredUsers(){
    return this._filteredUsers
  
  }
  set filteredUsers(value:string){
      this._filteredUsers = value
      if(this._filteredUsers !== ''){

        let newFilterUsers=this.Allusers.filter((user) =>
        user.userName.toLowerCase().includes(this._filteredUsers.toLowerCase()) 
        )
        this.filterAllUsers=newFilterUsers
      }else{
       this.filterAllUsers=this.Allusers
      }
  }

}
