import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //imageSrc = 'E:\Cognizant Practice\Angular\digitalbookui\src\assets\images\book-logo.jpg';
  imageSrc = './././assets/images/book-logo-2.jpg';
  imageAlt = 'book-logo';

  constructor() { }

  ngOnInit(): void {
  }

}
