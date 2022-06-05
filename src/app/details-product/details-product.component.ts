import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Product } from '../models/product';

@Component({
  selector: 'app-details-product',
  templateUrl: './details-product.component.html',
  styleUrls: ['./details-product.component.css']
})
export class DetailsProductComponent implements OnInit {
  id: number;
  product: Product;

  constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.product = new Product();
    this.id = this.route.snapshot.params['id'];
    this.productService.getProduct(this.id)
      .subscribe(data => {
        console.log(data),
          this.product = data;
      }, error => console.log(error));
  }

  list() {
    this.router.navigate(['products']);
  }

}
