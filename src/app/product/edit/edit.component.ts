import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  product:Product[]=[];
  constructor(private router:Router, private productService:ProductService) { }

  ngOnInit(): void {
   
  }

  addValue(value:any){
    alert(value.name);
    let product:Product={
      name: value.name,
      category: value.category
    }
    this.productService.onAdd(product);
    this.router.navigateByUrl('product');
  

  }
  
}