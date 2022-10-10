import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FooterComponent } from './Component/footer/footer.component';
//import { MycomponentComponent } from './mycomponent/mycomponent.component';

@NgModule({
  declarations: [AppComponent, FooterComponent , HeaderComponent ],
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
