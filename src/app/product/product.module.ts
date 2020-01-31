import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [ProductComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ],
  exports : [HeaderComponent, FooterComponent, SidebarComponent]
})
export class ProductModule { }
