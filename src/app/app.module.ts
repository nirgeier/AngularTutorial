import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UpperPipe } from './upper.pipe';
import { SubstrPipe } from './substr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UpperPipe,
    SubstrPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
