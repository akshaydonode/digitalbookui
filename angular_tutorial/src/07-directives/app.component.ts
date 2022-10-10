import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular_tutorial';
  myCssClass:string = "error";

  flag:boolean = false;

  toggle(){
    this.flag = !this.flag;
    this.updateCssClass();
    this.updateCssStyle();
}

updateCssClass(){
    if(this.flag){
        this.myCssClass = "success"
    } else {
        this.myCssClass = "error";
    }
}

updateCssStyle(){
    if(this.flag){
        this.myCssStyle['background-color']= "cyan",
        this.myCssStyle["border"]= "2px dotted black",
        this.myCssStyle["border-radius"]= "5px 15px"
    } else {
        this.myCssStyle['background-color']= "cornflowerblue",
        this.myCssStyle["border"]= "2px solid black",
        this.myCssStyle["border-radius"]= "15px"
    }
}

  myCssStyle :any = {
    "background-color": "cornflowerblue",
    "border": "2px solid black",
    "border-radius": "15px"
}
}
