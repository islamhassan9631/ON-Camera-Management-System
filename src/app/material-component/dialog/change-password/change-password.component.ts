import { MatDialogRef } from '@angular/material/dialog';
import { UserService } from './../../../service/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {
changepasswordForm:any=FormGroup
responseMessage:any
  constructor(private formBuillder:FormBuilder,
    private userService:UserService,
    public dialogRef:MatDialogRef<ChangePasswordComponent>,
   ) { }

  ngOnInit(): void {
    this.changepasswordForm = this.formBuillder.group({
      newpassword: [null, Validators.required],
      confirmpassword: [null, Validators.required]
    })
      
  }
validateSubmit(){
if(this.changepasswordForm.controls["newpassword"].value !=this.changepasswordForm.controls['confirmpassword'].value){
  return true
  
}
else{
  return false
}
}

handlechangepassword(){
  var formDate= this.changepasswordForm.value;
  var data={
    newpassword: formDate.newpassword,
    confirmpassword: formDate.confirmpassword
  }
  this.userService.update(data).subscribe({
    next:(res:any)=>{
      this.responseMessage=res.message;
      this.dialogRef.close();
     
    },
    error: (err:any)=>{

    }
    
  })
}

}
