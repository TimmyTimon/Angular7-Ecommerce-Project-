import { Component, OnInit } from '@angular/core';
import {ProductsService} from '../services/products.service';
import {Product} from '../classes/product';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-productpage',
  templateUrl: './productpage.component.html',
  styleUrls: ['./productpage.component.css']
})
export class ProductpageComponent implements OnInit {
  products:Observable<Product[]>;

  constructor(private prodService:ProductsService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData(){
    this.products=this.prodService.getProductList();
  }

}
