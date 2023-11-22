import { Component ,OnInit} from '@angular/core';
import { ProductsService } from '../products.service';
import { Products } from '../products';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-updateproducts',
  templateUrl: './updateproducts.component.html',
  styleUrls: ['./updateproducts.component.css']
})
export class UpdateproductsComponent implements OnInit{

  productid:number=0;
  products:Products = new Products();

  constructor(private productsService:ProductsService,
    private route:ActivatedRoute,
    private router:Router){}

    ngOnInit(): void {

      this.productid = this.route.snapshot.params['productid'];
  
      this.productsService.getProductById(this.productid).subscribe((data:any)=>{
  
      console.log(data)
  
        this.products = data[0];
  
        console.log(this.products)
  
      },
  
      error => console.log(error)
  
      );
  
    }
  onSubmit(){
    this.productsService.updateProduct(this.productid,this.products).subscribe(data=>{
      this.goToProductlist();
    },
    error => console.log(error)
    );
  }

  goToProductlist(){
    this.router.navigate(['/products']);
  }

  showupdate=function(){
    location.pathname=('/products')
  }
}