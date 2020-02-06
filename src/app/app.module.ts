import { VariablesGlobales } from './variableGlobales';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { DevExtremeModule } from 'devextreme-angular';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DevExtremeModule,
    NgSelectModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot()
  ],
  providers: [VariablesGlobales],
  bootstrap: [AppComponent]
})
export class AppModule { }
