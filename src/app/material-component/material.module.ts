import { CommonModule } from '@angular/common';
import { CdkTableModule } from '@angular/cdk/table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../shared/material-module';

import { ConfirationComponent } from './dialog/confiration/confiration.component';
import { ChangePasswordComponent } from './dialog/change-password/change-password.component';
import { MangeCategoryComponent } from './mange-category/mange-category.component';
import { CategoryComponent } from './dialog/category/category.component';
import { MangeProductComponent } from './mange-product/mange-product.component';
import { ProductComponent } from './dialog/product/product.component';
import { MangeOrderComponent } from './mange-order/mange-order.component';
import { ViewBillComponent } from './view-bill/view-bill.component';
import { MangeUserComponent } from './mange-user/mange-user.component';
import { UserComponent } from './dialog/user/user.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ViewBillProductsComponent } from './dialog/view-bill-products/view-bill-products.component';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(MaterialRoutes),
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    CdkTableModule
  ],
  providers: [],
  declarations: [
   
    ConfirationComponent,
    ChangePasswordComponent,
    MangeCategoryComponent,
    CategoryComponent,
    MangeProductComponent,
    ProductComponent,
    MangeOrderComponent,
    ViewBillComponent,
    MangeUserComponent,
    UserComponent,
    ViewBillProductsComponent    
  ]
})
export class MaterialComponentsModule {}
