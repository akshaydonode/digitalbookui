import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
import { AboutComponent } from './Component/about/about.component';
import { HomeComponent } from './Component/home/home.component';
import { LoginComponent } from './Component/login/login.component';
import { WelcomeComponent } from './Component/welcome/welcome.component';
import { RouterModule, Routes, Router } from "@angular/router";

//import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes:Routes =[
  {path: "home", component:HomeComponent},
  {path: "about", component:AboutComponent},
  {path: "login", component:LoginComponent},
  {path: "welcome", component:WelcomeComponent},

  {path: "**", redirectTo: "home"}
];

@NgModule({
  declarations: [AppComponent, FooterComponent , HeaderComponent, AboutComponent, HomeComponent, LoginComponent, WelcomeComponent ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  bootstrap: [AppComponent]
})
export class AppModule { }
