import { TypepersonnelComponent } from './typepersonnel.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';
import { NgSelectModule } from '@ng-select/ng-select';



@NgModule({
  declarations: [TypepersonnelComponent],
  imports: [
    CommonModule,
    FormsModule,
    DxDataGridModule,
    NgSelectModule,
  ]
})
export class TypepersonnelModule { }
