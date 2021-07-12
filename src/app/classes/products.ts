import {OrderDetails} from './order-details';

export class Products {
    
    productId:number;
    sku:number;
    idsku:number;
    vendorProductId:number;
    productName:string;
    description:string;
    supplierId:number;
    categoryId:number;
    quantityPerUnit:string;
    unitPrice:number;
    msrp:number;
    availableSize:string;
    availableColor:string;
    size:string;
    color:string;
    discount:number;
    unitWeight:string;
    unitInStock:string;
    unitsOnOrder:any;
    reOrderLevel:string;
    productAvailable:string;
    discountAvailable:number;
    currentOrder:string;
    photo:any=[];
    ranking:string;
    note:string;

    constructor(orderDetails?:OrderDetails){
        if(orderDetails){
            this.productId=orderDetails.orderDetailsId;
            this.idsku=orderDetails.idsku;
            this.sku=orderDetails.sku;
            this.productName=orderDetails.productName;
            this.description=orderDetails.description;
            this.quantityPerUnit=orderDetails.quantity;
            this.unitPrice=orderDetails.price;
            this.msrp=orderDetails.msrp;
            this.size=orderDetails.size;
            this.color=orderDetails.color;
            this.discount=orderDetails.discount;
            this.unitInStock=orderDetails.unitsInStock;
            this.productAvailable=orderDetails.productAvailable;
            this.discountAvailable=orderDetails.discountAvailable;
            this.ranking=orderDetails.ranking;
            this.unitsOnOrder=orderDetails.total;


        }
    }

}
