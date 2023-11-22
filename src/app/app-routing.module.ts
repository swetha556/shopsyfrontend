import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateproductsComponent } from './createproducts/createproducts.component';
import { UpdateproductsComponent } from './updateproducts/updateproducts.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { CreateordersComponent } from './createorders/createorders.component';
import { OrderdetailsComponent } from './orderdetails/orderdetails.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { CreatepaymentComponent } from './createpayment/createpayment.component';
import { PaymentlistComponent } from './paymentlist/paymentlist.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SuccessComponent } from './success/success.component';
import { SellerComponent } from './seller/seller.component';
import { BuyerComponent } from './buyer/buyer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'products',component:ProductlistComponent},
  {path:'createproducts',component:CreateproductsComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'updateproducts/:productid',component:UpdateproductsComponent},
  {path:'',redirectTo:'products',pathMatch:'full'},
  {path:'productdetails/:productid',component:ProductdetailsComponent},
  {path:'orders',component:OrderlistComponent},
  {path:'orderdetails/:productid',component:OrderdetailsComponent},
  {path:'createorders',component:CreateordersComponent},
  {path:'',redirectTo:'orders',pathMatch:'full'},
  {path:'payment',component:PaymentlistComponent},
  {path:'createpayment',component:CreatepaymentComponent},
  {path:'',redirectTo:'payment',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'createpayment',component:CreatepaymentComponent},
  {path:'success',component:SuccessComponent},
  {path:'seller',component:SellerComponent},
  {path:'buyer',component:BuyerComponent},
  {path:'home',component:HomeComponent},
  {path:'buyer',redirectTo:'/login',pathMatch:'full'},
  {path:'contact',component:ContactComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
