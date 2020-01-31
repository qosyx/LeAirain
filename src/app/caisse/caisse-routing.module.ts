import { CaisseComponent } from './caisse.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'caisse', pathMatch: 'full'},
  {path: 'caisse', component: CaisseComponent},
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class CaisseRoutingModule { }
