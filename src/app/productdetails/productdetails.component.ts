import { Component,OnInit } from '@angular/core';
import { Products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit{

  productid:number=0;
  products:any;

  constructor(private productsService:ProductsService,
    private route:ActivatedRoute){}

  ngOnInit(): void {
    this.productid = this.route.snapshot.params['productid'];
    this.products = new Products();
    this.productsService.getProductById(this.productid).subscribe((data:any)=>{

        console.log(data)
  
        this.products = data[0];
  
        console.log(this.products)
  
    });
  }

 
}