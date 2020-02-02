import { NgSelectModule } from '@ng-select/ng-select';
import { ServiceModule } from './../service/service.module';
import { ProductComponent } from './product.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductRoutingModule } from './product-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FormsModule } from '@angular/forms';
import { DxDataGridModule } from 'devextreme-angular';



@NgModule({
  declarations: [ProductComponent, HeaderComponent, FooterComponent, SidebarComponent],
  imports: [
    CommonModule,
    DxDataGridModule,
    FormsModule,
    NgSelectModule,
    ServiceModule.forRoot(),
    ProductRoutingModule
  ],
  exports : [HeaderComponent, FooterComponent, SidebarComponent]
})
export class ProductModule {

}
