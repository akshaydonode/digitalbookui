import { Component } from '@angular/core';


interface Book{
  title:string,
  price:number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
 
today:Date = new Date();
author:string = "aksHAy";
title:string= "hulk is white";

books:Array<Book> = [
  {title: "Hanuman", price: 23},
  {title: "Shaktiman", price: 20},
  {title: "Junior G", price: 15}

]

}
