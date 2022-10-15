import { Component, OnInit } from '@angular/core';
import { BookService } from '../../services/book.service';
import { ReaderService } from '../../services/reader.service';
import { Router } from '@angular/router';
import { NotificationService } from '../../services/notification.service';

@Component({
  selector: 'app-subscribe-book',
  templateUrl: './subscribe-book.component.html',
  styleUrls: ['./subscribe-book.component.scss']
})
export class SubscribeBookComponent implements OnInit {
  readerEmailIdfromSession: any;
  books: any[] = [];
  notifications: any[] = [];
  showNotificaion: boolean = false;

  constructor(
    private bookService: BookService,
    private readerService: ReaderService,
    private router: Router,
    private notificationService: NotificationService
  ) {
    //
  }

  ngOnInit(): void {
    this.showNotificaion = false;
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

  getNotification() {
    this.notificationService.getNotification().subscribe((res: any) => {
      console.log(res);
      if (res.message === 'Notification Found successfully') {
        alert(res.message);
        this.showNotificaion = true;
        this.notifications = res.messageList;
      } else {
        alert(res.exception);
        //this.router.navigate(["/subscribe"]);
      }

    },
      (err: any) => {
        console.log(err);

      });
  }

}
