import { CaisseComponent } from './caisse.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaisseRoutingModule } from './caisse-routing.module';



@NgModule({
  declarations: [CaisseComponent],
  imports: [
    CommonModule,
    CaisseRoutingModule
  ],
  exports: []
})
export class CaisseModule { }
