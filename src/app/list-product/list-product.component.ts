import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { Observable } from 'rxjs';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements OnInit {

  products: Observable<Product[]>;

    constructor(private productService: ProductService, private router: Router) {
  }


  ngOnInit() {
    this.products = this.productService.getAllProduct();
  }


  deleteProduct(id: number) {
    this.productService.deleteProduct(id)
      .subscribe(
        response => {
          console.log(response);
          this.products;
        },
        error => {
          console.log(error);
        });
  }

  detailsProduct(id: number) {
   this.router.navigate(['details', id]);
  }

  updateProduct(id: number) {
    this.router.navigate(['update', id]);
  }

}
