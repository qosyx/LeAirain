import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TypeproduitComponent } from './typeproduit.component';



const routes: Routes = [
  {path: '', redirectTo: 'typeproduit', pathMatch: 'full'},
  {path: 'typeproduit', component: TypeproduitComponent},
  ];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class TypeproduitRoutingModule { }
