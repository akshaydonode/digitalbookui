import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { RouterModule, Routes } from "@angular/router";
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { AuthorHomeComponent } from './components/author-home/author-home.component';
import { ReaderSignInComponent } from './components/reader-sign-in/reader-sign-in.component';
import { AppRoutingModule } from './Routing/app-routing.module';
import { SubscribeBookComponent } from './components/subscribe-book/subscribe-book.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    SigninComponent,
    SignupComponent,
    HomeComponent,
    AuthorHomeComponent,
    ReaderSignInComponent,
    SubscribeBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
