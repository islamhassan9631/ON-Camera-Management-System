import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  url2 =environment.apiurl
  url='https://fakestoreapi.com/products/categories'
  constructor(private http:HttpClient) { }
  addcategory(data:any){
    return this.http.post(this.url+'',data)
  }
  getallcategory(){
    return this.http.get(this.url+"")
  }
  updatecategoryById(data:any ,id:any){
    return this.http.patch(this.url+"",data,id)
  }
  deletecategory(id:any){
    return this.http.delete(this.url+"/"+id)
  }
}
