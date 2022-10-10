import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes:Routes = [
  { path: "login", component: LoginComponent },

 // { path: "welcome", component: WelcomeComponent },
  { path: "welcome/:uname", component: WelcomeComponent }
];


@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserModule { }
