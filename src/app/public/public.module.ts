import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [PublicComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    PublicRoutingModule
  ],
  exports: [PublicComponent, HeaderComponent, FooterComponent, SidebarComponent]
})
export class PublicModule { }
