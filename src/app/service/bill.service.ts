import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  url=environment.apiurl
  constructor(private http:HttpClient) { }

  generateReport(data: any) {
    return this.http.post(this.url+"",data)
  }
  getPDF(data: any):Observable<Blob>{
    return this.http.post(this.url+"",data,{responseType: "blob"})
  }
  getbill(){
    return this.http.get(this.url+'')
  }
  delete(id:any){
    return this.http.delete(this.url+""+id)

  }
}
