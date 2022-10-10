import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthorService } from '../../services/author.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm: FormGroup;

  constructor(private authorService: AuthorService,
    private router:Router
  ) {
    this.signUpForm = new FormGroup({
      authorName: new FormControl("", [Validators.required]),
      authorEmail: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
   }

  ngOnInit(): void {
  }
  signUp(){
    console.log(this.signUpForm.value);
    this.authorService.signUp(this.signUpForm.value).subscribe({
      next: (res:any)=>{
        console.log(res);
        console.log("response message",res.message);
        if(res.message === 'Author Registered Successfully...'){
          this.router.navigate(["/signin"]);
        }else{
          alert(res.exception);
        }
    },
    error: (err:any)=>{
        console.log(err)
    }
    })
    
  }
}
