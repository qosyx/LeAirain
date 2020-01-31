import { CaisseComponent } from './caisse.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaisseRoutingModule } from './caisse-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [CaisseComponent, FooterComponent, HeaderComponent, SidebarComponent],
  imports: [
    CommonModule,
    CaisseRoutingModule
  ],
  exports: [FooterComponent, HeaderComponent, SidebarComponent]
})
export class CaisseModule { }
