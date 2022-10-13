import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-author-home',
  templateUrl: './author-home.component.html',
  styleUrls: ['./author-home.component.scss']
})
export class AuthorHomeComponent implements OnInit {
  createBookFlag: boolean = false;
  getAuthorBookFlag: boolean = false;
  showBook: boolean = false;
  authorId: number = 0;
  bookCreateForm: FormGroup;
  book:any;
  books: any[]=[];
  authorIdfromSession: any;

  constructor(
    private bookService: BookService
  ) {
    this.bookCreateForm = new FormGroup({
      title: new FormControl("", [Validators.required]),
      category: new FormControl("", [Validators.required]),
      publisher: new FormControl("", [Validators.required]),
      price: new FormControl("", [Validators.required]),
      contents: new FormControl("", [Validators.required]),
      active: new FormControl("", [Validators.required]),
      authorId: new FormControl(localStorage.getItem("authorID"))
    });
  }

  ngOnInit(): void {
  }

  createBookF() {
    this.createBookFlag = true;
    this.getAuthorBookFlag=false;
    this.authorIdfromSession = localStorage.getItem("authorID");
    console.log("author id", this.authorIdfromSession);
  }
  getAuthorBook() {
    this.createBookFlag =false;
    this.authorIdfromSession = localStorage.getItem("authorID");
    console.log(this.authorIdfromSession);
    this.bookService.getAuthorBooks(this.authorIdfromSession).subscribe((res: any) => {
      console.log(res);
      if (res.message === 'Book Found Successfully') {
        this.getAuthorBookFlag = true;
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
  createBook() {
    console.log(this.bookCreateForm.value);
    this.bookService.createBook(this.bookCreateForm.value).subscribe((res: any) => {

      console.log(res);
      if (res.message === 'Book Created Successfully.') {
        this.showBook = true;
        this.books = res.result;
        console.log("book data", this.book);
      } else {
        alert(res.exception);
      }
      // if (res != null) {
      // //  console.log("token", res);
      // } else {

      // }
    },
      (err: any) => {
        console.log(err);

      }
    );
  }
  blockBook(bookId:any){

  }
}
