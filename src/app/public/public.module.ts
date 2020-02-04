import { RegisterComponent } from './../auth/register/register.component';
import { TypepersonnelComponent } from './../typepersonnel/typepersonnel.component';
import { TypeproduitComponent } from './../typeproduit/typeproduit.component';
import { OfficeComponent } from './../office/office.component';
import { CaisseComponent } from './../caisse/caisse.component';
import { ProductComponent } from './../product/product.component';
import { PublicComponent } from './public.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicRoutingModule } from './public-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { NgSelectModule } from '@ng-select/ng-select';
import { StockComponent } from '../stock/stock.component';



@NgModule({
  declarations: [TypeproduitComponent, TypepersonnelComponent, RegisterComponent,
    StockComponent, ProductComponent,
     OfficeComponent, CaisseComponent, PublicComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    FormsModule,
    DxDataGridModule,
    NgSelectModule,
    PublicRoutingModule
  ],
  exports: [TypeproduitComponent, TypepersonnelComponent, RegisterComponent,
    StockComponent, ProductComponent,
    OfficeComponent, CaisseComponent, PublicComponent, HeaderComponent, FooterComponent, SidebarComponent]
})
export class PublicModule { }
