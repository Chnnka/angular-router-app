import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data: any[] = [
    { id: 1, name: 'Paint Brush', price: 200 },
    { id: 2, name: 'Easel', price: 7800 },
    { id: 3, name: 'Paint', price: 300 },
  ];

  constructor() { }

  getAllProducts() {
    return of(this.data);
  }

  getProduct(id: number) {
    return of(this.data.find(p => p.id == id));
  }
}
