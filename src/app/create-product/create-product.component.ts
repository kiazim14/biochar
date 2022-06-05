import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  submitted = false;
  product: Product;

  constructor(private productService: ProductService, private router: Router) {
  }
  ngOnInit() {
  }
  newProduct () {
    this.submitted = false;
    this.product = new Product ();
  }
  save() {
    this.productService.createProduct(this.product)
      .subscribe
        ((response) => console.log (response), error => console.log (error));
    this.product = new Product ();
    this.gotolist();
  }

  private gotolist() {
    this.router.navigate(['/products']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

}
