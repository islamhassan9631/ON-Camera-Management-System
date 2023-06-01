import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url2=environment.apiurl
  url='https://fakestoreapi.com/users'
  constructor(private http:HttpClient) { }
  login(data:any){
    return this.http.post(this.url+'',data)
  }
  update(data:any){
    return this.http.patch(this.url+'',data)
  }
  getUsers(){
    return this.http.get(this.url+"")
  }
  getUserById(id:any){
    return this.http.get(this.url+""+id)
  }
  updateuser(data:any,id:any){
    return this.http.patch(this.url+""+id,data)
  }
  deleteUser(id:any){
    return this.http.delete(this.url+""+id)
  }
  adduser(data:any){
    return this.http.post(this.url+"",data)
  }
  
}
