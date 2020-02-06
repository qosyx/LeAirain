import { StockComponent } from './stock.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockRoutingModule } from './stock-routing.module';
import { DxDataGridModule } from 'devextreme-angular';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [StockComponent],
  imports: [
    CommonModule,
    StockRoutingModule,
    DxDataGridModule,
    FormsModule,
    NgSelectModule
  ],
  exports: [StockComponent]
})
export class StockModule { }
