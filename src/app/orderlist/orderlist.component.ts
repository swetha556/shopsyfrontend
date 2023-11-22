import { Component,OnInit  } from '@angular/core';
import { Orders} from '../orders';
import { OrdersService } from '../orders.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-orderlist',
  templateUrl: './orderlist.component.html',
  styleUrls: ['./orderlist.component.css']
})
export class OrderlistComponent implements OnInit{

orders:any;
  
  constructor(private ordersService:OrdersService,
    private router:Router){}

ngOnInit(): void {
  this.getOrders();
}

private getOrders(){
  this.ordersService.getOrderlist().subscribe(data=>
    {
      this.orders=data;
    });
}

orderdetails(productid:number){
  this.router.navigate(['orderdetails',productid]);
}


}
