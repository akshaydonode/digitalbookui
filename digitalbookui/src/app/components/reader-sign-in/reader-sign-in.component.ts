import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReaderService } from '../../services/reader.service';
import { SubscribeEntity } from '../../interface/SubscribeEntity';

@Component({
  selector: 'app-reader-sign-in',
  templateUrl: './reader-sign-in.component.html',
  styleUrls: ['./reader-sign-in.component.scss']
})
export class ReaderSignInComponent implements OnInit {

  createReaderFlag: boolean = false;
  signInReaderFlag: boolean = false;
  readerForm: FormGroup;
  readerEmailForm: FormGroup;
  bookId: any;
  subscribeBook: any;


  constructor(
    private router: Router,
    private readerService: ReaderService
    // private subscribeBook: SubscribeEntity
  ) {

    this.readerForm = new FormGroup({
      readerName: new FormControl("", [Validators.required]),
      readerEmail: new FormControl("", [Validators.required])
    });

    this.readerEmailForm = new FormGroup({
      readerEmail: new FormControl("", [Validators.required])
    });
  }
  ngOnInit(): void {
    this.signInReaderFlag = true;
    this.bookId = localStorage.getItem("bookId");
  }
  getReaderLogin() {
    console.log(this.readerEmailForm.value);
    this.readerService.getReader(this.readerEmailForm.value).subscribe((res: any) => {

      //debugger
      console.log(res);
      if (res.message === 'Reader found Successfully.') {
        console.log("readerData", res);
        alert(res.message);
        localStorage.setItem("readerEmail", res.result.readerEmail);
        localStorage.setItem("readerId", res.result.readerId);
        localStorage.setItem("readerName", res.result.readerName);
        // this.subscribeBook = {
        //   readerId: res.result.readerId,
        //   readerEmail: res.result.readerEmail,
        //   bookId: this.bookId
        // }
     this.subscribeBookFun(res.result.readerId, res.result.readerEmail);
      } else {
        alert(res.exception);
        this.createReaderFlag = true;
        this.signInReaderFlag = false;
        this.router.navigate(["/reader-signIn"]);
      }
    },
      (err: any) => {
        // debugger
        console.log(err);
        alert(err);

      }
    );
  }

  createReader() {
    this.createReaderFlag = true;
    this.signInReaderFlag = false;
    this.router.navigate(["/reader-signIn"]);
  }

  addReader() {
    console.log(this.readerForm.value);
    this.readerService.addReader(this.readerForm.value).subscribe((res: any) => {
      console.log(res);
      //debugger
      if (res.message === 'Reader added Successfully.') {
        alert(res.message);
        console.log("readerData", res);
        localStorage.setItem("readerEmail", res.result.readerEmail);
        localStorage.setItem("readerId", res.result.readerId);
        localStorage.setItem("readerName", res.result.readerName);
      
        this.subscribeBookFun(res.result.readerId, res.result.readerEmail);

      } else {
        alert(res.exception);
        this.createReaderFlag = true;
        this.signInReaderFlag = false;
        this.router.navigate(["/reader-signIn"]);
      }
    },
      (err: any) => {
        // debugger
        console.log(err);
        alert(err);

      }
    );

  }

  subscribeBookFun(readerId:string,readerEmail:string) {
    this.subscribeBook = {
      readerId : readerId,
      readerEmail: readerEmail,
      bookId: this.bookId
    }

    console.log(this.subscribeBook);
    this.readerService.subscribeBook(this.subscribeBook).subscribe((res: any) => {
      console.log(res);
      //debugger
      if (res.message === 'Booked Subscribed Successfully.') {
        alert(res.message);
        console.log("readerData", res);
        this.router.navigate(["/subscribe"]);

      } else {
        alert(res.exception);
        this.router.navigate(["/home"]);
      }
    },
      (err: any) => {
        // debugger
        console.log(err);
        alert(err);

      }
    );

  }
}
