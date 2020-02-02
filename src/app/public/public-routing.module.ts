import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';



const routes: Routes = [
  {path: '', redirectTo: 'public', pathMatch: 'full'},
  {path: 'public', component: PublicComponent},
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
