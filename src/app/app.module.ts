import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { UpperPipe } from './upper.pipe';
import { SubstrPipe } from './substr.pipe';
import { TranslationPipe } from './translation.pipe';
import { TranslatorService } from './translator.service';

@NgModule({
  declarations: [
    AppComponent,
    UpperPipe,
    SubstrPipe,
    TranslationPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TranslatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
