import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'angular_tutorial';
  btnColor:string='darkseagreen';

  updateColor(c:string = "red"){
    this.btnColor=c;
  }
}
