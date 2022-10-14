import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ReaderService } from '../../services/reader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subscribe-book',
  templateUrl: './subscribe-book.component.html',
  styleUrls: ['./subscribe-book.component.scss']
})
export class SubscribeBookComponent implements OnInit {
  readerEmailIdfromSession: any;
  books: any[] = [];

  constructor(
    private bookService: BookService,
    private readerService: ReaderService,
    private router: Router
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
  cancelSubscription(bookId: any, readerId: any) {
    console.log("bookID:", bookId, " readerID:", readerId);
    console.log(localStorage.getItem("readerEmail"))
    this.readerService.cancelSubscription(bookId).subscribe((res: any) => {
      console.log(res);
      if (res.message === 'Book Unsubscribed successfully...') {
        alert(res.message);
        this.router.navigate(["/subscribe"]);
        // this.books = res.resultArray;
        // console.log("book data", this.books);
      } else {
        alert(res.exception);
        this.router.navigate(["/subscribe"]);
      }

    },
      (err: any) => {
        console.log(err);

      });
  }

}
