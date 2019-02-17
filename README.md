# Pipes

In this part we will learn how to use Angular Pipes

- First lets create a new Angular project
  ```
  ng new pipes --minimal
  
  Would you like to add Angular routing? No
  Which stylesheet format would you like to use? CSS
  ```
- Generate new pipe which will convert the text to upper case
  ```
  ng g p upper --skipTests
  ```
- Update the pipe code to convert text to upper case 
[`src/app/upper.pipe.ts`](src/app/upper.pipe.ts)
  ```js
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'upper'
  })
  export class UpperPipe implements PipeTransform {

    transform(value: any, args?: any): any {
      return value.toUpperCase();
    }
  }
  ```

- Update the html and add some text & some build in pipes
[`src/app/app.component.html`](src/app/app.component.html)
  ```html
  <p><b>AbcdEfgHiJklmnOpQrstuVWxyZ:</b> {{ 'AbcdEfgHiJklmnOpQrstuVWxyZ' | upper }}</p>
  <p><b>AbcdEfgHiJklmnOpQrstuVWxyZ:</b> {{ 'AbcdEfgHiJklmnOpQrstuVWxyZ' | uppercase}}</p>
  <p><b>AbcdEfgHiJklmnOpQrstuVWxyZ:</b> {{ 'AbcdEfgHiJklmnOpQrstuVWxyZ' | lowercase}}</p>
  ```