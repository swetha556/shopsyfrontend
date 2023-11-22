import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private baseURL = "http://localhost:8999/sell/products";

  constructor(private httpClient:HttpClient) { }

  getProductlist():Observable<Products[]>{
    return this.httpClient.get<Products[]>(`${this.baseURL}`);
  }

  createProducts(products:Products):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,products);
  }

  getProductById(productid:number):Observable<Products>{
    return this.httpClient.get<Products>(`${this.baseURL}/${productid}`);
  }

  updateProduct(productid:number,products:Products):Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/${productid}`,products);
  }

  deleteProduct(productid:number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${productid}`);
  }
}