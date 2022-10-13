import { Component, OnInit, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { AuthorService } from '../../services/author.service';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { HttpHeaders } from '@angular/common/http';
import { AuthorLogin } from '../../interface/AuthorLogin';
import { AuthenticateData } from '../../interface/AuthenticateData';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})

export class SigninComponent {

  TOKEN_HEADER_KEY = 'Authorization';
  //const headers = new HttpHeaders();
  tokenString: string = '';
  body: any;
  checkTokenExist: boolean = false;

  authorForm: FormGroup;

  constructor(
    private authorService: AuthorService,
    private router:Router
  ) {

    this.authorForm = new FormGroup({
      authorEmail: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }

  ngOnInit() { }

  getLogin() {
    // debugger
    console.log(this.authorForm.value);
    let authenticateData: AuthenticateData = {
      userName: this.authorForm.value.authorEmail,
      password: this.authorForm.value.password
    };
    console.log(authenticateData);
    this.authorService.authenticate(authenticateData).subscribe((res: any) => {

      //debugger
      if (res != null) {
        console.log("token", res);
      } else {

      }
    },
      (err: any) => {
        // debugger
        console.log(err);
        console.log("token", err.error.text);
        sessionStorage.setItem("token", err.error.text)
        this.signIn();
      }
    );

  }
  signIn(){
    this.authorService.signIn(this.authorForm.value).subscribe((res: any) => {
      console.log("signIn",res);
       if(res.message === 'Author Login successfully'){
         console.log("authorID",res.result.authorId);
        //sessionStorage.setItem("authorID",res.result.authorId);
        localStorage.setItem("authorID", res.result.authorId);
         this.router.navigate(["/author-home"]);
       }else{
         alert(res.exception);
       }
     },
       (err: any) => {
       })
  }

  checkToken(): boolean {
    let token = localStorage.getItem("token");
    if (token != null) {
      return true;
    } else {
      return false;
    }
  }

  //authenticate
  // localStorage.setItem("username", username);

}

