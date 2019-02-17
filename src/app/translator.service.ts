import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

/**
 * No docs since the developer doesn't
 * think its good to write documentation
 */
export class TranslatorService {

  public languages = ['he', 'en'];
  public language = 'en';

  public translations = {
    'en': {
      texts: {
        'hello': 'Hello',
        'name': 'Moshe',
        'age:': 'age'
      }
    },
    'he': {
      texts: {
        'hello': 'שלום',
        'name': 'משה',
        'age:': 'גיל'
      }
    }
  };

  constructor() { }

  /**
   * Excellent doc here....
   * @param key 
   */
  translate(key: string): string {
    return this.translations[this.language].texts[key];
  }

}