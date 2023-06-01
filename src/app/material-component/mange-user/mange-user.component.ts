import { UserComponent } from './../dialog/user/user.component';
import { UserService } from './../../service/user.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ConfirationComponent } from '../dialog/confiration/confiration.component';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-mange-user',
  templateUrl: './mange-user.component.html',
  styleUrls: ['./mange-user.component.scss']
})
export class MangeUserComponent implements OnInit {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator; 
displayedCoulumns:string[]=["username","email",'phone','status']
dataSource:any;

  constructor(private userService:UserService,
    private dialog:MatDialog,
    private router:Router,
    private ngxService:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.ngxService.start()
this.tableData()
  }
tableData(){
this.userService.getUsers().subscribe((res:any)=>{
  console.log(res);
  this.ngxService.stop()
  this.dataSource=new MatTableDataSource(res);
  this.dataSource.pagintor= this.paginator
})
}
applyFilter(event:Event){
  const filterValue=(event.target as HTMLInputElement).value;
  
  this.dataSource.filter=filterValue.trim()
  console.log(filterValue);
  
  }
  handleChangeAction(status:any,id:any){
    var data={
      status:status.toString(),

id:id
    }
    this.userService.updateuser(data,data.id).subscribe((res:any)=>{

    })
  }
  handleAddAction(){
    
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      action:"Add"
    }
    dialogConfig.width="850px"
    const dialogRef=this.dialog.open(UserComponent,dialogConfig)
    this.router.events.subscribe(()=>{
      dialogRef.close()
      this.ngxService.start()
    })
    const sub=dialogRef.componentInstance.onAddUser.subscribe((res)=>{
      this.ngxService.stop()
      this.tableData()
    })
  }
  handleEditAction(value:any){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      action:"Edit",
      data:value
    }
    dialogConfig.width="850px"
    const dialogRef=this.dialog.open(UserComponent,dialogConfig)
    this.router.events.subscribe(()=>{
      dialogRef.close()
    })
    const sub=dialogRef.componentInstance.onEditUser.subscribe((res)=>{
      this.tableData()
    })
  }
  handleDeletAction(value:any){
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      message:'delete '+value.name+' user ' +' ?'
    };
    const dialogRef=this.dialog.open(ConfirationComponent,dialogConfig);
    const sub=dialogRef.componentInstance.onEmitStatusChange.subscribe((res)=>{
this.deleteUser(value.id)
dialogRef.close()
    })
  }
  deleteUser(id:any){
    this.ngxService.start()
    this.userService.getUserById(id).subscribe((res:any)=>{
      this.ngxService.stop()
this.tableData()
    })
  }
}
