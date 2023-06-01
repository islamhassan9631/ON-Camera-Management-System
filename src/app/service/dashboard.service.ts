import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  url=environment.apiurl
  constructor(private http:HttpClient) { }
  getdietals(){
    return this.http.get(this.url+"")
  }
}
