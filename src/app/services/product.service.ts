import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: Product[]=[{
    name:'Sweet',
    category:'Foods'
  },
  {
    name:'Salt',
    category:'Foods'
  }
  ];
  constructor() { }

  onGet(){
    return this.products
  }
  onAdd(product:Product){
    this.products.push(product)
  }
}
