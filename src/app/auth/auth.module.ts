import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { RegisterComponent } from './register/register.component';



@NgModule({
  declarations: [AuthComponent, SignInComponent, RegisterComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  exports: [AuthComponent, SignInComponent, RegisterComponent]
})
export class AuthModule { }
