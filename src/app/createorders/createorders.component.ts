import { Component ,OnInit} from '@angular/core';
import { Orders } from '../orders';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createorders',
  templateUrl: './createorders.component.html',
  styleUrls: ['./createorders.component.css']
})
export class CreateordersComponent implements OnInit{
  orders:Orders= new Orders();
 
  constructor(private ordersService:OrdersService,
    private router:Router){}

  ngOnInit(): void {    
  }

  saveOrders(){
    this.ordersService.createOrders(this.orders).subscribe(data=>{
      console.log(data);
      this.goToOrderlist()
    },
    error => console.log(error)
    );
  }

  goToOrderlist(){
    this.router.navigate(['/orders'])
  }

  onSubmit(){
    console.log(this.orders);
    this.saveOrders();
  }

  Paymentopen=function(){
    location.pathname=('/createpayment');
  }
} 


