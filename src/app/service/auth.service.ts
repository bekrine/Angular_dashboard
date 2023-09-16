import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  apiUrl='http://localhost:3000/user'

  count:any


  getAllUsers(){
    return this.http.get(this.apiUrl)
  }

getUser(id:string| null | undefined){
  return this.http.get(`${this.apiUrl}/${id}`)
}
// {id:number,userName:string,password:string,email:string,role:'Admin'|'condidate'}
register(dataUser:any){
  return this.http.post(this.apiUrl,dataUser)
}

updateUser(id:number,dataUser:{id:number,userName:string,password:string,email:string,role:'Admin'|'condidate'}){
  return this.http.put(`${this.apiUrl}/${id}`,dataUser)
}

isLogedIn(){
  return sessionStorage.getItem('id') !== null
}
getUserRole(){
  return sessionStorage.getItem('role') !== null ? sessionStorage.getItem('role')?.toString() : ''
}
logOut(){
  return  sessionStorage.clear()
}


}
