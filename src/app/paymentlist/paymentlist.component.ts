import { Component,OnInit } from '@angular/core';
import { Payment} from '../payment';
import { PaymentService } from '../payment.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paymentlist',
  templateUrl: './paymentlist.component.html',
  styleUrls: ['./paymentlist.component.css']
})

export class PaymentlistComponent implements OnInit{

payment:any;
  
  constructor(private paymentService:PaymentService,
    private router:Router){}

ngOnInit(): void {
  this.getPayment();
}

private getPayment(){
  this.paymentService.getPaymentlist().subscribe(data=>
    {
      this.payment=data;
    });
}


}