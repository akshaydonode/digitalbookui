import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { AboutComponent } from '../components/about/about.component';
import { SigninComponent } from '../components/signin/signin.component';
import { SignupComponent } from '../components/signup/signup.component';
import { AuthorHomeComponent } from '../components/author-home/author-home.component';
import { ReaderSignInComponent } from '../components/reader-sign-in/reader-sign-in.component';
import { SubscribeBookComponent } from '../components/subscribe-book/subscribe-book.component';


const routes:Routes = [
    { path: "*", component: HomeComponent },
    { path: "home", component: HomeComponent },
    { path: "about", component: AboutComponent },
    {path: "signin", component: SigninComponent},
    {path: "signup", component: SignupComponent},
    {path:"author-home", component:AuthorHomeComponent},
    {path:"reader-signIn",component: ReaderSignInComponent},
    {path:"subscribe", component:SubscribeBookComponent}
  
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
  })
  export class AppRoutingModule {
  }