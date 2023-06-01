import { BillService } from './../../service/bill.service';
import { ProductService } from './../../service/product.service';
import { CategoryService } from './../../service/category.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-mange-order',
  templateUrl: './mange-order.component.html',
  styleUrls: ['./mange-order.component.scss']
})
export class MangeOrderComponent implements OnInit {
displayColumns:string[]=['title','category','price','quantity','total','edit'];
dataSource:any=[]
manageOrderForm:any=FormGroup;
category:any=[];
products:any=[];
price:any;
totalAmount:number=0
value:any=''

  constructor(private formBuilder:FormBuilder,
    private categoryService:CategoryService,
    private productService:ProductService,
    private billService:BillService,
    private ngxService:NgxUiLoaderService
    ) { }

  ngOnInit(): void {
    this.getCategory()
    this.manageOrderForm=this.formBuilder.group({
      name:[null,[Validators.required]],
      email:[null,[Validators.required]],
      contactNumber:[null,[Validators.required]],
      paymentMethod:[null,[Validators.required]],
   product:[null,[Validators.required]],
      category:[null,[Validators.required]],
      quantity:[null,[Validators.required]],
   price:[null,[Validators.required]],
  total:[0,[Validators.required]],

    })
  }
  getCategory(){
    this.categoryService.getallcategory().subscribe((res:any)=>{
      this.category=res
    })
  }
getproductByCategory(value:any){
  console.log(value);
  
  this.productService.getProductByCategory(value).subscribe((res:any)=>{
    console.log(res);
    console.log(value);
    
    
    this.products=res
    this.manageOrderForm.controls['price'].setValue('');
    this.manageOrderForm.controls['quantity'].setValue('');
    this.manageOrderForm.controls['total'].setValue(0);
  })
}
getProductDetails(value:any){
  console.log(value.id);
  
  this.productService.getProductById(value.id).subscribe((res:any)=>{
    this.price=res.price;
    this.manageOrderForm.controls['price'].setValue(res.price);
    this.manageOrderForm.controls['quantity'].setValue('1');
    this.manageOrderForm.controls['total'].setValue(this.price*1);
  })
}
getproductid(){
  this.value
  console.log(this.value);
  
  this.productService.getProductById(this.value).subscribe({
    next: (res:any)=>{
      this.price=res.price;
      // this.category=res
      this.manageOrderForm.controls['price'].setValue(res.price);
      this.manageOrderForm.controls['quantity'].setValue('1');
      this.manageOrderForm.controls['total'].setValue(this.price*1);
      console.log(res);
      
    }
  })
}
setQuantity(value:any){
  var temp=this.manageOrderForm.controls['quantity'].value;
  if(temp> 0){
    this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value);
  }
  else if(temp !=''){
    this.manageOrderForm.control['quantity'].setValue('1');
    this.manageOrderForm.controls['total'].setValue(this.manageOrderForm.controls['quantity'].value * this.manageOrderForm.controls['price'].value);
  }
}
validateProductAdd(){
  if(this.manageOrderForm.controls['total'].value ===0 || this.manageOrderForm.controls['total'].value === null ||this.manageOrderForm.controls['quantity'].value<=0){
    return true
}
else{return false}}
validateSubmit(){
  if(this.totalAmount===0 ||this.manageOrderForm.controls['name'].value===null||this.manageOrderForm.controls['contactNumber'].value){return true}
  else{return false}
}
add(){
  var formData=this.manageOrderForm.value;
  var productName=this.dataSource.find((e:{id:number})=>e.id==formData.product.id)
  if(productName===undefined){
    this.totalAmount=this.totalAmount+formData.total;
    this.dataSource.push({id:formData.product.id,title:formData.product.title,category:formData.category,quantity:formData.quantity,price:formData.price,total:formData.total})
    this.dataSource=[...this.dataSource]
  }
}
handleDeleteAction(value:any,element:any){
  this.totalAmount=this.totalAmount - element.total;
  this.dataSource.splice(value,1)
  this.dataSource=[...this.dataSource]
}
submitAction(){
  this.ngxService.start()
  var formData=this.manageOrderForm.value;
  var data={
    name:formData.name,
    email:formData.email,
    contactNumber:formData.contactNumber,
    paymentMethod:formData.paymentMethod,
    totalAmount:formData.totalAmount,
  productDetails:JSON.stringify(this.dataSource)
  }
  this.billService.generateReport(data).subscribe((res:any)=>{
    this.ngxService.stop()
this.dawnloadFile(res.uuid);
this.manageOrderForm.reset();
this.dataSource=[]
this.totalAmount=0
  })
}
dawnloadFile(value:any){
  var data={
    uuid:value
  }
  this.billService.getPDF(data).subscribe((res:any)=>{
    // kkk saveAs(res,value+'.pdf)
  })
}
}
