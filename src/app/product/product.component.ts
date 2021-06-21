import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  products: Product[]=[];

  
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products=this.productService.onGet();
  }
  getValue(value:any){
   let product: Product={
     name: value.name,
     category: value.category
   }
   this.productService.onAdd(product);

  }

}
