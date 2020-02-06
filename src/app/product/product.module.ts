import { NgSelectModule } from '@ng-select/ng-select';
import { ServiceModule } from './../service/service.module';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';



@NgModule({
  declarations: [ProductComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    FormsModule,
    NgSelectModule,
    ServiceModule.forRoot(),
    ProductRoutingModule
  ],
  exports : []
})
export class ProductModule {

}
