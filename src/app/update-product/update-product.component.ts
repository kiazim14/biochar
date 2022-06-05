import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import {ActivatedRoute, Router} from '@angular/router';
import { ProductService} from '../services/product.service';


@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  submitted: boolean;
  private id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private router: Router,
              private productService: ProductService) {
  }

  ngOnInit() {
    this.product = new Product();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id)
      .subscribe(data => {
          console.log(data),
            this.product = <Product>data;},
        error => console.log(error));

  }

  onSubmit() {
    this.submitted = true;
    this.updateProduct();
  }

  private updateProduct() {
    this.productService.updateProduct(this.id, this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    this.gotoList();
  }

  private gotoList() {
    this.router.navigate(['/product']);
  }
}
