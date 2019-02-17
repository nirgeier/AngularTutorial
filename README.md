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
---

### Step02 - Pipes with parameters

- Create another pipe
  ```
  ng g p substr --skipTests
  ```
- Update the pipe code [`src/app/substr.pipe.ts'](src/app/substr.pipe.ts)
  ```js
  import { Pipe, PipeTransform } from '@angular/core';

  @Pipe({
    name: 'substr'
  })
  export class SubstrPipe implements PipeTransform {

    transform(
      value: string,
      start: number,
      end: number): any {
      return value.substring(start, end);
    }

  }
  ```  
- Add code to the template to test the pipe
```html
<p><b>AbcdEfgHiJklmnOpQrstuVWxyZ:</b> {{ 'AbcdEfgHiJklmnOpQrstuVWxyZ' | substr:5:10}}</p>
<p><b>AbcdEfgHiJklmnOpQrstuVWxyZ:</b> {{ 'AbcdEfgHiJklmnOpQrstuVWxyZ' | substr:3:5}}</p>
```  

---
### Step03 - Translation Service
- In this section we will use the `@Injectable` decorator
- `@Injectable` is a common way to inject services into  our application
  ```js
  @Injectable({
    // we declare that this service should be created
    // by the root application injector.
    providedIn: 'root'
  })
  ```
- Lets create the translator service and the translation pipe
  ```sh
  ng g s translator --skipTests
  ng g p translation --skipTests
  ```
- **At this point the Developer took a day off and you have to do the following:**

  1. Add a new language to the translation mechanism
  2. Return the original string if the translation is not found so developers can know that there is no translation
  3. Each language should also support different DateFormat
  4. To make things a little bit less clear there are 2 kind of pipes
  https://angular.io/guide/pipes#pure-and-impure-pipes

  **Good luck.**
