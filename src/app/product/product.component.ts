import{ Component, Input, Output, EventEmitter} from '@angular/core'

import {Product } from './../models/product.models'
import { Title } from '@angular/platform-browser';
@Component({
       selector:'app-product',
       styleUrls:['./product.componet.css'],
      templateUrl:'./product.componet.html'
})

export class productComponent{

    @Input() product: Product = {
        id: 0,
        title: '',
        image: '',
        price: 0,
        text: ''
      };
      @Output() clickedProduct= new EventEmitter<number>();

      
      viewDetail(){
        console.log('viewDetail', this.product.title);
        this.clickedProduct.emit(this.product.id);
      }
}
