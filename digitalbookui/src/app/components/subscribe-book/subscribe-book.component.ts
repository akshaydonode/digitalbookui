import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-subscribe-book',
  templateUrl: './subscribe-book.component.html',
  styleUrls: ['./subscribe-book.component.scss']
})
export class SubscribeBookComponent implements OnInit {
  readerEmailIdfromSession: any;
  books:any[]=[];

  constructor(
    private bookService: BookService
  ) { 
    //
}

ngOnInit(): void {
  this.readerEmailIdfromSession = localStorage.getItem("readerEmail");
  this.bookService.getReaderBooks(this.readerEmailIdfromSession).subscribe((res: any) => {
    console.log(res);
    if (res.message === 'Book Found Successfully') {
    
      this.books = res.resultArray;
      console.log("book data", this.books);
    } else {
      alert(res.exception);
    }

  },
    (err: any) => {
      console.log(err);

    });
  }

}
