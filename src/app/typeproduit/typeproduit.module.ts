import { TypeproduitComponent } from './typeproduit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeproduitRoutingModule } from './typeproduit-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';



@NgModule({
  declarations: [TypeproduitComponent, HeaderComponent, SidebarComponent, FooterComponent],
  imports: [
    CommonModule,
    FormsModule,
    DxDataGridModule,
    NgSelectModule,
    TypeproduitRoutingModule
  ],
  exports: [HeaderComponent, SidebarComponent, FooterComponent],
})
export class TypeproduitModule { }
