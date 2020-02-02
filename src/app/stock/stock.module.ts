import { StockComponent } from './stock.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRoutingModule } from './stock-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DxDataGridModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StockComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    DxDataGridModule,
    FormsModule,
  ],
  exports: [StockComponent, HeaderComponent, FooterComponent, SidebarComponent]
})
export class StockModule { }
