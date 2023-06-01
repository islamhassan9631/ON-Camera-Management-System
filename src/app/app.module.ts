import { TokenInterceptorInterceptor } from './service/token-interceptor.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BestSellerComponent } from './best-seller/best-seller.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';

import { MangeCategoryComponent } from './material-component/mange-category/mange-category.component';
import { MangeOrderComponent } from './material-component/mange-order/mange-order.component';
import { MangeProductComponent } from './material-component/mange-product/mange-product.component';
import { MangeUserComponent } from './material-component/mange-user/mange-user.component';
import { ViewBillComponent } from './material-component/view-bill/view-bill.component';
import { CategoryComponent } from './material-component/dialog/category/category.component';
import { ProductComponent } from './material-component/dialog/product/product.component';
import { UserComponent } from './material-component/dialog/user/user.component';
import { ChangePasswordComponent } from './material-component/dialog/change-password/change-password.component';
import { ConfirationComponent } from './material-component/dialog/confiration/confiration.component';
import { LoginComponent } from './service/login/login.component';
import { FullComponent } from './layouts/full/full.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './shared/material-module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QRCodeModule } from 'angularx-qrcode';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { NgQrScannerModule } from 'angular2-qrscanner';
import { NgxPrintModule } from 'ngx-print';
import { NgxUiLoaderConfig, NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';
const ngxuiloadeerConfig:NgxUiLoaderConfig={
  text:'Loading...',
  textColor:'#ffffff',
  textPosition:'center-center',
  bgsColor:"#7bifa2",
  fgsColor:'#7bifa2',
  fgsType:SPINNER.squareJellyBox,
  fgsSize:100,
  hasProgressBar:false,
}
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BestSellerComponent,
    FullComponent,
    AppHeaderComponent,
    AppSidebarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
    SharedModule ,
    HttpClientModule,
 QRCodeModule,
 NgxUiLoaderModule.forRoot(ngxuiloadeerConfig),
 NgxScannerQrcodeModule,
    ZXingScannerModule,
    NgQrScannerModule,
    NgxPrintModule
  ],
  // providers: [HttpClientModule,{provide:HTTP_INTERCEPTORS,useClass:TokenInterceptorInterceptor,multi:true}],
  bootstrap: [AppComponent],
  schemas:  [NO_ERRORS_SCHEMA]
  
})
export class AppModule { }
