import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './shared/components/product-list/product-list.component';
import { ProductDetailsComponent } from './shared/components/product-details/product-details.component';

const routes: Routes = [
  {
    path:'',component:ProductListComponent
  },
  {
    path:'product/:id',component:ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
