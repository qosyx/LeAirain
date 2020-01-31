import { OfficeComponent } from './office.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: '', redirectTo: 'office', pathMatch: 'full'},
  {path: 'office', component: OfficeComponent},
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class OfficeRoutingModule { }
