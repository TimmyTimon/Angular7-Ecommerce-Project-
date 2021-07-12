import { Injectable } from '@angular/core';

import {Product} from '../classes/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items:[];
  product:Product;

  constructor() { }

  addToCart(product){
  this.items.push();
  }

  getItems(){
    return this.items;
  }

 clearCart(){
   this.items=[];
   return this.items;
 }

}
