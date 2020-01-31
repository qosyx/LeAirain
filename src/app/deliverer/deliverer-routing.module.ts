import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DelivererComponent } from './deliverer.component';


const routes: Routes = [
  {path: '', redirectTo: 'deliverer', pathMatch: 'full'},
  {path: 'deliverer', component: DelivererComponent},
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class DelivererRoutingModule { }
