import { Component,OnInit  } from '@angular/core';
import { Orders } from '../orders';
import { ActivatedRoute } from '@angular/router';
import { OrdersService } from '../orders.service';


@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit{

  productid:number=0;
  orders:any;

  constructor(private ordersService:OrdersService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.productid = this.route.snapshot.params['productid'];
    this.orders = new Orders();
    this.ordersService.getOrderByProductId(this.productid).subscribe(data=>{
        this.orders = data;
    });
  }

 
}