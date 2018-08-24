import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { IntroComponent } from './intro.component';
import { InputComponent } from './inputcomponent';


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent, IntroComponent, InputComponent]
})
export class AppModule { }
