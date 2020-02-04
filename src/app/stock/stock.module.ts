import { StockComponent } from './stock.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRoutingModule } from './stock-routing.module';
import { DxDataGridModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    DxDataGridModule,
    FormsModule,
  ],
  exports: [StockComponent]
})
export class StockModule { }
