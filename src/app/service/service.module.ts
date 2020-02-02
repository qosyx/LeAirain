import { ProduitServiceService } from './produit-service.service';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class ServiceModule {
  static forRoot(): ModuleWithProviders{
    return{
      ngModule: ServiceModule,
      providers: [
        ProduitServiceService
      ]
    }
  }
}
