import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CulturePickerComponent } from './culture-picker/culture-picker.component';


@NgModule({
  declarations: [
    AppComponent,
    CulturePickerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
