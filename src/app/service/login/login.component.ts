import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm:any=FormGroup
  response: any
    constructor(private formBulider:FormBuilder,
      private router:Router,
      private userService:UserService,
      public dialogRef:MatDialogRef<LoginComponent>,
      private ngxService:NgxUiLoaderService
    ) { }
  
  
    ngOnInit(): void {
      this.loginForm=this.formBulider.group({
        email:[null,[ Validators.required,Validators.email]],
        password:[null,[ Validators.required]]
      })
    }
  handleSubmit(){
    this.ngxService.start()
  var formData=this.loginForm.value;
  var data={
    email:formData.email,
    password:formData.password
  }
  this.router.navigate(['/dashboard'])
  this.userService.login(data).subscribe({
    
  next:(res:any)=>{
    this.ngxService.stop()
    this.dialogRef.close()
    localStorage.setItem("token",res.token)
    
  
  }
  
  
   
  })
  }
}
