import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, NgModule, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DashboardService } from '../service/dashboard.service';
import { MaterialModule } from '../shared/material-module';
import { DashboardRoutes } from './dashboard.routing';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})


export class DashboardComponent  {
  responseMessage:any;
  data:any;
  
    
  
    constructor(private daschbord:DashboardService,private route:Router
     ) {
      this.route.navigate(['/dashboard']);
        this.dashboardData()
    }
  
    dashboardData(){
      this.daschbord.getdietals().subscribe({
        next: (data:any) => {
          this.data=data
        },error: (error:any) => {
          this.responseMessage=error
          
        }
      })
    }
}
