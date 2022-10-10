import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  getLogin(username:string, pwd:string){
    console.log(username, pwd);
    if(this.validateUser({username: username, pwd: pwd})){
      // go to welcome page
      console.log("valid user");
   //   this.router.navigate(["/user/welcome"]);
   this.router.navigate(["user","welcome", username]);

    } else {
      alert("You are not a valid user")
    }
  }


  validateUser(user:any):boolean{
    // send request to server
    if(
      !!user && 
      !!(user.username) && 
      typeof user.username === "string" && 
      user.username.length!=0 && 
      user.username === user.pwd
    ){
      return true;
    } else {
      return false;
    }
  }

}
