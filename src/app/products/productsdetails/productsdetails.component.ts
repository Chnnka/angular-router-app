import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.css']
})
export class ProductsdetailsComponent implements OnInit {
  product: any = {};
  constructor(private store: ProductsService, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let id = params.get("id");

      if (id) {
        this.store.getProduct(parseInt(id, 10)).subscribe(product => this.product = product);
      }

    })
  }

}
