import { ProductService } from './../../../service/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, Inject, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';
import * as JsBarcode from 'jsbarcode';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  public myAngularxQrCode!: string;
onAddProduct=new EventEmitter();
onEditProduct=new EventEmitter();
productForm:any=FormGroup;
dialogAction:any="Add";
action:any="Add";
category:any=[]
qrcode:any=this.productForm.value


  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
  private formBuilder:FormBuilder,
  private productService:ProductService,
public dialogRaf:MatDialogRef<ProductComponent>,
private categoryService:CategoryService,) { }

  ngOnInit(): void {
   this.productForm=this.formBuilder.group({
    title:[null,[Validators.required]],
    categoryId:[null,[Validators.required]],
    price:[null,[Validators.required]],
    description:[null,[Validators.required]],
    
   })
  
   this.myAngularxQrCode=JSON.stringify(this.productForm.value);
   if(this.dialogData.action==="Edit"){
    this.dialogAction="Edit";
    this.action="Update";
    this.productForm.patchValue(this.dialogData.data)
    
    this.dialogData.data.toString();
    
    console.log(this.myAngularxQrCode);
    
   }
   this.getcategory()
   this.myAngularxQrCode=JSON.stringify(this.dialogData.data)
   var x=this.dialogData.data.id
   console.log(x);
  console.log(typeof(x));
  
   
   JsBarcode("#barcode", x, {
    //  format: "upc",
    lineColor: "#0aa",
     width:2,
     height:40,
    displayValue: false
 
    
  });
  console.log(x);
 
  
  }
  


  getcategory(){
    this.categoryService.getallcategory().subscribe((res:any)=>{
      this.category=res
    })
  }
handleSubmit(){
if(this.dialogAction === "Edit"){
  this.edit()

}else{
  this.add()
}
}
edit(){
  var formData=this.productForm.value;
  var data={
    id:this.dialogData.data.id,
    name:formData.title,
    categoryId:formData.categoryId,
    price:formData.price,
    description:formData.description
  }
  this.productService.updatProduct(data,data.id).subscribe((res)=>{
   
    this.dialogRaf.close()
    this.onEditProduct.emit()
  })
}
add(){
  var formData=this.productForm.value;
  var data={
    title:formData.title,
    categoryId:formData.categoryId,
    price:formData.price,
    description:formData.description
  }
  console.log(data);
  
  this.myAngularxQrCode=JSON.stringify(data)
  this.productService.addProduct(data).subscribe((res)=>{
    console.log(res);
    
    this.dialogRaf.close()
    this.onAddProduct.emit()
  })
}
genretQrCode(data:any){
  console.log(data);
  
  this.myAngularxQrCode=JSON.stringify(data)
  var x=data.title
  JsBarcode("#barcode", x, {
    //  format: "upc",
    lineColor: "#0aa",
     width:1,
     height:40,
    displayValue: false
  });
  console.log(this.productForm.value);
  
}
}

