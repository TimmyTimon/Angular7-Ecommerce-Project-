import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home/home.component";
import {GetstartedComponent} from "./getstarted/getstarted.component";
import {ManagersignupComponent} from "./managersignup/managersignup.component";
import {ManagersigninComponent} from "./managersignin/managersignin.component";
import {DepartmentsignupComponent} from "./departmentsignup/departmentsignup.component";
import {DepartmentsigninComponent} from "./departmentsignin/departmentsignin.component";
import {EmployeesignupComponent} from "./employeesignup/employeesignup.component";
import {EmployeesigninComponent} from "./employeesignin/employeesignin.component";
import {ProductpageComponent} from "./productpage/productpage.component";
import {ProductdetailComponent} from "./productdetail/productdetail.component";
import {CheckoutComponent} from "./checkout/checkout.component";
import {BlogComponent} from "./blog/blog.component";
import {DeptportalComponent} from "./deptportal/deptportal.component";
import {ManagertportalComponent}  from "./managertportal/managertportal.component";
import {DeptsignupComponent} from "./deptsignup/deptsignup.component";
import {CartComponent} from "./cart/cart.component";
import {AdminPortalComponent} from "./admin-portal/admin-portal.component";
import { ProductDetailsComponent } from './product-details/product-details.component';
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";


const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'getstarted', component:GetstartedComponent},
  {path:'employeesignup', component:EmployeesignupComponent},
  {path:'employeesignin', component:EmployeesigninComponent},
  {path:'managersignup', component:ManagersignupComponent},
  {path:'managersignin', component:ManagersigninComponent},
  {path:'deptsignup', component:DepartmentsignupComponent},
  {path:'deptsignin', component:DepartmentsigninComponent},
  {path:'productpage', component:ProductpageComponent},
  {path:'productdetail', component:ProductdetailComponent},
  {path:'checkout', component:CheckoutComponent},
  {path:'blog', component:BlogComponent},
  {path:'deptportal', component:DeptportalComponent},
  {path:'managerportal', component:ManagertportalComponent},
  {path:'departsignup', component:DeptsignupComponent},
  {path:'cart', component:CartComponent},
  {path:'adminportal', component:AdminPortalComponent},
  {path:'products/:productId', component:ProductDetailsComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
