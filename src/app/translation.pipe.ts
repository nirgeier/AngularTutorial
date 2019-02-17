import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from './translator.service';

@Pipe({
  name: 'translation',
  pure: false
})
/**
 * Well documented class.
 * This class will do anything its need to do as you can see.
 */
export class TranslationPipe implements PipeTransform {

  constructor(private translatorService: TranslatorService) { }
  transform(value: any, args?: any): any {
    console.log('transform: ', value);
    return this.translatorService.translate(value);
  }

}
