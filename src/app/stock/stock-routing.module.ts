import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { StockComponent } from './stock.component';


const routes: Routes = [
  {path: '', redirectTo: 'stock', pathMatch: 'full'},
  {path: 'stock', component: StockComponent},
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class StockRoutingModule { }
