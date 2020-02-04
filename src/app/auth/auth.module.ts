import { PublicComponent } from './../public/public.component';
import { AuthComponent } from './auth.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { SignInComponent } from './sign-in/sign-in.component';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [ AuthComponent, SignInComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    DxDataGridModule,
    NgSelectModule,
  ],
  exports: [AuthComponent, SignInComponent]
})
export class AuthModule { }
