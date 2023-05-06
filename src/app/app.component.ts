import { Component } from '@angular/core';
import{Product} from './models/product.models'

interface User{
    name: string;
    age: number;
    isSingle: boolean;
    avatar:string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '   este es segundo ';
  name= 'kike';
 
  rockbands: string[]= ['nirvana', 'ellos']
  
  users: User[] = [
    {
      name: 'nico',
      age: 25,
      isSingle: false,
      avatar: 'assets/img/1.png',
    },
  
    {
      name: 'jull',
      age: 28,
      isSingle: false,
      avatar: 'assets/img/2.png',
    }
  ];

   rockbandsName ='';
  
  

  chengeTitle(){
    this.title='nuvo'
  }

  addRockbands(){
    this.rockbands.push(this.rockbandsName);
    this.rockbandsName='';
  }

  empty(){
    this.rockbands=[];
  }

  deleteItem(index: number){
    this.rockbands.splice(index, 1);
  }

  udateItem(index: number){
    this.rockbands[index]='se cambio';
  }
}
