import { DelivererComponent } from './deliverer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DelivererRoutingModule } from './deliverer-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [DelivererComponent, FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    DelivererRoutingModule
  ],
  exports: [FooterComponent, HeaderComponent, SidebarComponent]
})
export class DelivererModule { }
