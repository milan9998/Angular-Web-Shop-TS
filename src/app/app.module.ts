import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MaterialModule } from './ui-material.module';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';
import { FormsModule } from '@angular/forms';
import { UserService } from './auth/user.service';
import { ProfileComponent } from './auth/profile/profile.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ClothesService } from './clothes/clothes.service';
import { CommonModule } from '@angular/common';
import { ClothesdetailsComponent } from './clothesdetails/clothesdetails.component';
import { CartComponent } from './cart/cart.component';
import { LogoutComponent } from './auth/logout/logout.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    WelcomeComponent,
    ClothesdetailsComponent,
    ProfileComponent,
    ClothesComponent,
    CartComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    CommonModule
  ],
  providers: [
    provideAnimationsAsync(),
    UserService,
    ClothesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
