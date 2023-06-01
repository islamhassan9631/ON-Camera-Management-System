import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit, Inject,Input, ViewChild } from '@angular/core';
import { CategoryService } from 'src/app/service/category.service';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
onAddCategory=new EventEmitter();
onEditCategory=new EventEmitter();
categoryForm: any=FormGroup;
dialogAction:any='Add';
action:any='Add'
responseMessage:any;
  constructor(@Inject(MAT_DIALOG_DATA) public dialogData:any,
  private formBuilder:FormBuilder,
  private categoryservice:CategoryService,
  public dialogRef:MatDialogRef<CategoryComponent>,
  ) { }

  ngOnInit(): void {
    this.categoryForm = this.formBuilder.group({
      name:[null,[Validators.required]]
    })
    if(this.dialogData.action ==='Edit'){
      this.dialogAction='Edit';
      this.action='Update';
      this.categoryForm.patchValue(this.dialogData.data);
    }
  }
handleSubmit(){
  if(this.dialogAction==='Edit'){
    this.edit()
  }
else{
  this.add()
}
}
add(){
  var formData = this.categoryForm.value;
  var data={
    name:formData.name

  }
  this.categoryservice.addcategory(data).subscribe((response:any)=>{
    this.dialogRef.close()
    this.onAddCategory.emit()

  })
}
edit(){
  var formData = this.categoryForm.value;
  var data={
    id:this.dialogData.data.id,
    name:formData.name

  }
  this.categoryservice.updatecategoryById(data,data.id).subscribe((response:any)=>{
    this.dialogRef.close()
    this.onEditCategory.emit()
    
  })
}
}
