import {Products} from './products';

export class OrderDetails {

    orderDetailsId:number;
    orderNumber:number;
    price:number;
    quantity:string;
    discount:number;
    total:number;
    idsku:number;
    size:string;
    color:string;
    fulfilled:string;
    shipDate:string;
    billDate:string;
    productName:string;
    description:string;
    productPhoto:string;
    ranking:any;
    sku:number;
    msrp:number;
    productAvailable:string;
    discountAvailable:any;
    unitsInStock:any;

    constructor(products?:Products){
        this.price=products.unitPrice;
        this.quantity=products.quantityPerUnit;
        this.discount=products.discount;
        this.total=products.unitsOnOrder;
        this.idsku=products.idsku;
        this.size=products.size;
        this.color=products.color;
        this.productName=products.productName;
        this.description=products.description;
        this.productPhoto=products.photo;
        this.ranking=products.ranking;
        this.sku=products.sku;
        this.msrp=products.msrp;
        this.productAvailable=products.productAvailable;
        this.discountAvailable=products.discountAvailable;
        this.unitsInStock=products.unitInStock;

    }

}
