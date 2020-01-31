import { OfficeComponent } from './office.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OfficeRoutingModule } from './office-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [OfficeComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    OfficeRoutingModule
  ],
  exports : [HeaderComponent, FooterComponent, SidebarComponent]
})
export class OfficeModule { }
