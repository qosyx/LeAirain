import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderRoutingModule } from './order-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [OrderComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ], exports : [HeaderComponent, FooterComponent, SidebarComponent]
})
export class OrderModule { }
