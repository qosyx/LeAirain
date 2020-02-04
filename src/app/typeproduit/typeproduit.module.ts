import { TypeproduitComponent } from './typeproduit.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypeproduitRoutingModule } from './typeproduit-routing.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';



@NgModule({
  declarations: [TypeproduitComponent],
  imports: [
    CommonModule,
    FormsModule,
    DxDataGridModule,
    NgSelectModule,
    TypeproduitRoutingModule
  ],
  exports: [],
})
export class TypeproduitModule { }
