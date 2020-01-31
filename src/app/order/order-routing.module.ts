import { OrderComponent } from './order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: 'order', pathMatch: 'full'},
  {path: 'order', component: OrderComponent},
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
