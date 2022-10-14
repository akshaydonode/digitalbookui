import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ReaderService } from '../../services/reader.service';

@Component({
  selector: 'app-readerdashvord-signin',
  templateUrl: './readerdashvord-signin.component.html',
  styleUrls: ['./readerdashvord-signin.component.scss']
})
export class ReaderdashvordSigninComponent implements OnInit {

  createReaderFlag: boolean = false;
  signInReaderFlag: boolean = false;
  readerForm: FormGroup;
  readerEmailForm: FormGroup;
  bookId: any;
  constructor(
    private router: Router,
    private readerService: ReaderService
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
        this.router.navigate(["/subscribe"]);
      } else {
        alert(res.exception);
        this.createReaderFlag = true;
        this.signInReaderFlag = false;
        this.router.navigate(["/readerdash-signIn"]);
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
    this.router.navigate(["/readerdash-signIn"]);
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
        this.router.navigate(["/subscribe"]);
      } else {
        alert(res.exception);
        this.createReaderFlag = true;
        this.signInReaderFlag = false;
        this.router.navigate(["/readerdash-signIn"]);
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
