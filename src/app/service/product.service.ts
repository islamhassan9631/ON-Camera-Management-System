import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  url2=environment.apiurl
  url='https://fakestoreapi.com/products/'
  constructor(private http:HttpClient) { }
  getallProduct(){
    return this.http.get(this.url+"")
  }
  getProductById(id:any){
    return this.http.get(this.url+id)
  }
  addProduct(data:any){
    return this.http.post(this.url+"",data)
  }
  updatProduct(id:any,data:any){
    return this.http.patch(this.url+"",id,data)
  }
  updatProductStuatus(id:any,data:any){
    return this.http.patch(this.url+"",id,data)
  }
  deleteproduct(id:any){
return this.http.delete(this.url+"",id)
  }
  getProductByCategory(id:any){
    return this.http.get(this.url+"category/" +id)
  }
}
