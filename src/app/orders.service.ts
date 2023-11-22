import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from './orders';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private baseURL = "http://localhost:8998/buy/orders";

  constructor(private httpClient:HttpClient) { }

  getOrderlist():Observable<Orders[]>{
    return this.httpClient.get<Orders[]>(`${this.baseURL}`);
  }

  createOrders(orders:Orders):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,orders);
  }

  getOrderByProductId(productid:number):Observable<Orders>{
    return this.httpClient.get<Orders>(`${this.baseURL}/${productid}`);
  }

  
}