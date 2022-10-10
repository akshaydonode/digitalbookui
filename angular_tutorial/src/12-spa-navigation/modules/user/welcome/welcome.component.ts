import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {


  name:string = "";

  constructor(private activatedRoute:ActivatedRoute) { 
    this.activatedRoute.params.subscribe((parameters)=>{
      console.log(parameters);
      this.name = parameters['uname'];
    })
  }
  ngOnInit(): void {
  }

}
