import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductslistComponent } from './products-list/products-list.component';
import { ProductsdetailsComponent } from './productsdetails/productsdetails.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProductslistComponent,
    ProductsdetailsComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ProductsModule { }
