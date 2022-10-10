import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from "@angular/router";
import { UserModule } from './modules/user/user.module';

//import { MycomponentComponent } from './mycomponent/mycomponent.component';

const routes:Routes =[
  {path: "home", component:HomeComponent},
  {path: "about", component:AboutComponent},

  { path: "user", loadChildren: () => import("./modules/user/user.module").then(m=>m.UserModule) },


  {path: "**", redirectTo: "home"}
];

@NgModule({
  declarations: [AppComponent, FooterComponent , HeaderComponent, AboutComponent, HomeComponent ],
  imports: [BrowserModule, RouterModule.forRoot(routes),UserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
