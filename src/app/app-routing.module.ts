import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  {path: 'caisse', loadChildren: './caisse/caisse.module#CaisseModule'},
  {path: 'deliverer', loadChildren: './deliverer/deliverer.module#DelivererModule'},
  {path: 'office', loadChildren: './office/office.module#OfficeModule'},
  {path: 'product',  loadChildren: './product/product.module#ProductModule'},
  {path: 'order',  loadChildren: './order/order.module#OrderModule'},
  {path: 'typeproduit',  loadChildren: './typeproduit/typeproduit.module#TypeproduitModule'},
  {path: 'stock',  loadChildren: './stock/stock.module#StockModule'},
  {path: 'public',  loadChildren: './public/public.module#PublicModule'},

  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
