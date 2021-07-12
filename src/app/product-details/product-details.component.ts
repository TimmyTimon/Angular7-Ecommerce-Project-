import { Component, OnInit } from '@angular/core'

import {Router,ActivatedRoute} from '@angular/router';
import {Product} from '../classes/product';
import {ProductsService} from '../services/products.service';
import {Observable} from 'rxjs';
import {CartService} from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  id:number;
  product:Product;

  constructor(private route:ActivatedRoute,private router:Router,
    private  productsService:ProductsService,
    private cartService:CartService) { 


  }

  ngOnInit() {
    this.product=new Product();

    this.id = this.route.snapshot.params['productId'];

    this.productsService.getProducts(this.id)
    .subscribe(data =>{
      console.log(data)
      this.product=data;
      }, error => console.log(error));

  }

  addToCart(product){
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}
