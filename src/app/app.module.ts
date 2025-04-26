import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';
import { ProductListComponent } from './shared/components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
