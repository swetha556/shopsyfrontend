import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Payment } from './payment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private baseURL = "http://localhost:8080/pay/payment";

  constructor(private httpClient:HttpClient) { }

  getPaymentlist():Observable<Payment[]>{
    return this.httpClient.get<Payment[]>(`${this.baseURL}`);
  }

  createPayment(payment:Payment):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,payment);
  }

  
}