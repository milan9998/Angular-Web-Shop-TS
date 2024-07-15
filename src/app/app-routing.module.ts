/* 
  Dokumentacija
  https://angular.io/guide/routing-overview
*/

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ClothesdetailsComponent } from './clothesdetails/clothesdetails.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './auth/logout/logout.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'clothes', component: ClothesComponent},
  { path: 'clothesdetails/:id', component: ClothesdetailsComponent},
  { path: 'cart', component: CartComponent},
  {path: 'logout', component: LogoutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
