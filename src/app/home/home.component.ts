import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { QrScannerComponent } from 'angular2-qrscanner';
import { LoginComponent } from '../service/login/login.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit{
  @ViewChild(QrScannerComponent)
  qrScannerComponent!: QrScannerComponent; 
  constructor(private dialog:MatDialog) { }
  ngOnInit(){
   
}
public output!:string;
scanresult:any=''
  loginAction(){
    const dialogconfig=new MatDialogConfig();
    dialogconfig.width="550px";
    this.dialog.open(LoginComponent,dialogconfig )
  }
  public onError(e:any):void{
    alert(e)
  }
  onCodeResult(result:any){
this.scanresult=result;
  }

  ngAfterViewInit(){
  //   this.qrScannerComponent.getMediaDevices().then(devices => {
  //     console.log(devices);
  //     const videoDevices: MediaDeviceInfo[] = [];
  //     for (const device of devices) {
  //         if (device.kind.toString() === 'videoinput') {
  //             videoDevices.push(device);
  //         }
  //     }
  //     if (videoDevices.length > 0){
  //         let choosenDev;
  //         for (const dev of videoDevices){
  //             if (dev.label.includes('front')){
  //                 choosenDev = dev;
  //                 break;
  //             }
  //         }
  //         if (choosenDev) {
  //             this.qrScannerComponent.chooseCamera.next(choosenDev);
  //         } else {
  //             this.qrScannerComponent.chooseCamera.next(videoDevices[0]);
  //         }
  //     }
  // });

  // this.qrScannerComponent.capturedQr.subscribe(result => {
  //     console.log(result);
  // });
  }
}
