import { ViewBillComponent } from './view-bill/view-bill.component';
import { MangeOrderComponent } from './mange-order/mange-order.component';
import { MangeCategoryComponent } from './mange-category/mange-category.component';
import { Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { MangeProductComponent } from './mange-product/mange-product.component';
import { MangeUserComponent } from './mange-user/mange-user.component';



export const MaterialRoutes: Routes = [
    {path: 'category', component: MangeCategoryComponent},
    {path: 'product', component: MangeProductComponent},
    {path: 'order', component: MangeOrderComponent},
    {path: 'bill', component:ViewBillComponent},
    {path: 'user', component:MangeUserComponent},
];