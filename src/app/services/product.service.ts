import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { HttpClient, HttpHeaders } from "@angular/common/http";


const httpHeaders = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ProductService {
private baseUrl = 'http://localhost:8082/';

  constructor(private http: HttpClient) { }

  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/product/${id}`);
  }
  getAllProduct(): Observable<any> {
    return this.http.get(this.baseUrl + 'products');
  }
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.baseUrl+'product', product,{headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }
  updateProduct(id: number, value: any): Observable<Product> {
    return this.http.put<Product>(this.baseUrl+'product/{id}', value, {headers: new HttpHeaders({ 'Content-Type': 'application/json' })});
  }

  deleteProduct(id: number): Observable<any> {
    return this.http.delete(this.baseUrl+'product/{id}', {responseType : 'text'});
  }
}
