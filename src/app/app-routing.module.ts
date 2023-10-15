import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ContactComponent } from './contact/contact.component';
import { ProductslistComponent } from './products/products-list/products-list.component';
import { ProductsdetailsComponent } from './products/productsdetails/productsdetails.component';

const routes: Routes = [
  { path: '', component: FirstComponent },
  { path: 'second', component: SecondComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'products', component: ProductslistComponent },
  { path: 'products/:id', component: ProductsdetailsComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
