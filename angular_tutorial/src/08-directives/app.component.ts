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
  data:any = {
    success:false,
    message: "",
    books: []
  }

  toggle(){
    this.flag = !this.flag;
    // this.updateCssClass();
    // this.updateCssStyle();
    this.loadData();
}

loadData(){
    if(this.flag){

        this.data.message="success",
        this.data.success=true,
        this.data.books=[
            { title: "Superman", price: 25 },
            { title: "Hanuman", price: 28 },
            { title: "BalGanesh", price: 12 }
        ]
    }else{
        this.data={
            success:false,
            message:"Due to some issue data not found",
            books:[]
        }
    }
}

}
