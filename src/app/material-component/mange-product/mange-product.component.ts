import { ConfirationComponent } from './../dialog/confiration/confiration.component';
import { ProductComponent } from './../dialog/product/product.component';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ProductService } from './../../service/product.service';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-mange-product',
  templateUrl: './mange-product.component.html',
  styleUrls: ['./mange-product.component.scss']
})
export class MangeProductComponent implements OnInit {
displayColumns: string[] =["title", "price", "category","description","edit"]
dataSource:any=[{"name":"gfg","price":"200","categoryName":"yugh","description":"hhhh"}]

  constructor(private productService:ProductService,
   private dialog:MatDialog,
   private router:Router ,
   private ngxService:NgxUiLoaderService) { }

  ngOnInit(): void {
    this.tablaData()
  }
tablaData(){
  this.ngxService.start()
  this.productService.getallProduct().subscribe((res:any)=>{
    console.log(res);
    this.ngxService.stop()
     this.dataSource=new MatTableDataSource(res)
  })
}
applyFilter(event:Event){
  const filterValue=(event.target as HTMLInputElement).value;
  
  this.dataSource.filter=filterValue.trim()
  console.log(filterValue);
  
  }
  handleAddAction(){
    this.ngxService.start()
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      action:"Add"
    }
    dialogConfig.width="850px"
    this.ngxService.stop()
    const dialogRef=this.dialog.open(ProductComponent,dialogConfig)
    this.router.events.subscribe(()=>{
      dialogRef.close()
    })
    const sub=dialogRef.componentInstance.onAddProduct.subscribe((res)=>{
      this.tablaData()
    })
  }
  handleEditAction(value:any){
    this.ngxService.start()
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      action:"Edit",
      data:value
    }
    dialogConfig.width="850px"
   this.ngxService.stop()
    const dialogRef=this.dialog.open(ProductComponent,dialogConfig)
    this.router.events.subscribe(()=>{
      dialogRef.close()
    })
    const sub=dialogRef.componentInstance.onEditProduct.subscribe((res)=>{
      this.tablaData()
    })
  }
  handleDeletAction(value:any){
    console.log(value);
    
    const dialogConfig=new MatDialogConfig();
    dialogConfig.data={
      message:'delete *'+value.title+'* product ' +' ?'
    };
    const dialogRef=this.dialog.open(ConfirationComponent,dialogConfig);
    const sub=dialogRef.componentInstance.onEmitStatusChange.subscribe((res)=>{
this.deleteProduct(value.id)
dialogRef.close()
    })
  }
  deleteProduct(id:any){
    this.productService.deleteproduct(id).subscribe((res:any)=>{
this.tablaData()
    })
  }
  onChange(status:any,id:any){
    var data={
        status:status.toString(),
        id:id
    }
    this.productService.updatProductStuatus(data,data.id).subscribe((res:any)=>{
      
    })
  }
}

