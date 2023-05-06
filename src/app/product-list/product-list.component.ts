import { Component } from '@angular/core';
import { Product } from './../models/product.models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products: Product[]=[
    {
      id:1,
      title: 'goku 1',
      price: 20,
      text: 'lora',
      image:'assets/img/2.png',
    },
    {
      id:2,
      title: 'goku 2',
      price: 25,
      text: 'lora',
      image:'assets/img/2.png',
    },
    {
      id:3,
      title: 'goku 3',
      price: 30,
      text: 'lora',
      image:'assets/img/2.png',
    }
  ];

  constructor(){}
  

  onclickedProduct(id: number){
    console.log('clicked', id);
  }

}
