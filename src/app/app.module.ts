import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GetstartedComponent } from './getstarted/getstarted.component';
import { EmployeesignupComponent } from './employeesignup/employeesignup.component';
import { EmployeesigninComponent } from './employeesignin/employeesignin.component';
import { ManagersignupComponent } from './managersignup/managersignup.component';
import { ManagersigninComponent } from './managersignin/managersignin.component';
import { DepartmentsignupComponent } from './departmentsignup/departmentsignup.component';
import { DepartmentsigninComponent } from './departmentsignin/departmentsignin.component';
import { ProductpageComponent } from './productpage/productpage.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BlogComponent } from './blog/blog.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DeptportalComponent } from './deptportal/deptportal.component';
import { ManagertportalComponent } from './managertportal/managertportal.component';
import { DeptsignupComponent } from './deptsignup/deptsignup.component';
import { CartComponent } from './cart/cart.component';
import { AdminPortalComponent } from './admin-portal/admin-portal.component';
import { AdminAddProductComponent } from './admin/admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from './admin/admin-edit-product/admin-edit-product.component';
import { LaptopsComponent } from './products/electronics/laptops/laptops.component';
import { DesktopsComponent } from './products/electronics/desktops/desktops.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

import {HeaderModule} from './header/header.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GetstartedComponent,
    EmployeesignupComponent,
    EmployeesigninComponent,
    ManagersignupComponent,
    ManagersigninComponent,
    DepartmentsignupComponent,
    DepartmentsigninComponent,
    ProductpageComponent,
    ProductdetailComponent,
    BlogComponent,
    CheckoutComponent,
    DeptportalComponent,
    ManagertportalComponent,
    DeptsignupComponent,
    CartComponent,
    AdminPortalComponent,
    AdminAddProductComponent,
    AdminEditProductComponent,
    LaptopsComponent,
    DesktopsComponent,
    PageNotFoundComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HeaderModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 