import { Component } from '@angular/core';
import { TranslatorService } from './translator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TranslatorService]
})
export class AppComponent {
  title = 'pipes';
  longText = "Lorem ipsum dolor sit amet, eu omnesque imperdiet vis, stet aliquip ceteros per ea. Cum oratio minimum contentiones no. Et per natum perpetua, ea illum everti albucius eum, stet cetero id mea. No cum v";

  constructor(private translationService: TranslatorService) { }

}
