import { Component, OnInit } from '@angular/core';

import {Product} from '../../classes/product';
import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {
products:any=new Product();
submitted=false;

public selectedFiles:any=File;

  constructor(private prodService:ProductsService) { }

  ngOnInit() {
  }

  newProducts():void{
    this.submitted =false;
    this.products =new Product();
     }

     selectFile(event) {
      const file = event.target.files[0];
      this.selectedFiles=file;
    }
   
     save(){
        const formData=new FormData();
        formData.append('products',JSON.stringify(this.products));
        formData.append('file',this.selectedFiles);

       this.prodService.createProducts(formData).subscribe((data)=>
       { console.log(data)}, (error) => { console.log(error)}
       );
     }
   
     onSubmit(){
       this.submitted=true;
       this.save();
     }

}
