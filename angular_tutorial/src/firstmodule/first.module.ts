import { NgModule } from '@angular/core';
import { AppComponent } from './first.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [AppComponent],
    imports:[BrowserModule],
    bootstrap: [AppComponent]
})
export class AppModule{}