import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CategoryService } from './../../service/category.service';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { CategoryComponent } from '../dialog/category/category.component';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-mange-category',
  templateUrl: './mange-category.component.html',
  styleUrls: ['./mange-category.component.scss']
})
export class MangeCategoryComponent implements OnInit {
displayColumns:string[] = ['name','edit'];
dataSource:any=[{"name":"islam"},{"name":'nada'}]
resMeasssge:any;
  constructor(private categoryService:CategoryService,
    private dialog:MatDialog,
    private ngxService:NgxUiLoaderService,
    private router:Router) { }

  ngOnInit(): void {
    this.ngxService.start()
    this.tableData()
  }
tableData(){
this.categoryService.getallcategory().subscribe({
  next:(res:any)=>{
    console.log(res);
    this.ngxService.stop()
     this.dataSource=new MatTableDataSource(res)
     
  }
})
}
applyFilter(event:Event){
const filterValue=(event.target as HTMLInputElement).value;

this.dataSource.filter=filterValue.trim()
console.log(filterValue);

}
handlAddAction(){
const dialogConfig=new MatDialogConfig();
dialogConfig.data={
  action:'Add'
}
dialogConfig.width="850px";
const dialogRef=this.dialog.open(CategoryComponent,dialogConfig)
this.router.events.subscribe(()=>{
  dialogRef.close()
})
const sub =dialogRef.componentInstance.onAddCategory.subscribe((res)=>{
  this.tableData()
})
}
handleEditAction(value:any){
  const dialogConfig=new MatDialogConfig();
  console.log(value);
  
dialogConfig.data={
  action:'Edit',
  data:value
}
dialogConfig.width="850px";
const dialogRef=this.dialog.open(CategoryComponent,dialogConfig)
this.router.events.subscribe(()=>{
  dialogRef.close()
})
const sub =dialogRef.componentInstance.onEditCategory.subscribe((res)=>{
  this.tableData()
})
}
}
