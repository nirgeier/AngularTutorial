<!-- header start -->

<a href="https://stackoverflow.com/users/1755598/codewizard"><img src="https://stackoverflow.com/users/flair/1755598.png" width="208" height="58" alt="profile for CodeWizard at Stack Overflow, Q&amp;A for professional and enthusiast programmers" title="profile for CodeWizard at Stack Overflow, Q&amp;A for professional and enthusiast programmers"></a>&emsp;![Visitor Badge](https://visitor-badge.laobi.icu/badge?page_id=nirgeier)&emsp;[![Linkedin Badge](https://img.shields.io/badge/-nirgeier-blue?style=flat&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/nirgeier/)](https://www.linkedin.com/in/nirgeier/)&emsp;[![Gmail Badge](https://img.shields.io/badge/-nirgeier@gmail.com-fcc624?style=flat&logo=Gmail&logoColor=red&link=mailto:nirgeier@gmail.com)](mailto:nirgeier@gmail.com)&emsp;[![Outlook Badge](https://img.shields.io/badge/-nirg@codewizard.co.il-fcc624?style=flat&logo=microsoftoutlook&logoColor=blue&link=mailto:nirg@codewizard.co.il)](mailto:nirg@codewizard.co.il)

## <!-- header end -->

# Angular Tutorial

This repository will walk step by step to teach you the basics of angular.
Each step is committed in its own commit so you can perform diff/pull request
To see what was changed between each steps.

### Kickstart

The following code was executed to create this angular project

- Install all the requirements

  `npm install -g @angular/cli`

- Create the project skelton

  `ng new angularTutorial`  
   `cd angularTutorial`

- Development server

  Run `ng serve` for a dev server.  
   Navigate to `http://localhost:4200/`  
   The app will automatically reload if you change any of the source files.

### Step 01 - Basics

Lets navigate through the different project files to get idea what is going on

- Make sure `ng serve` is running and open the browser on `http://localhost:4200/`
- Change the application title inside the `app.component.ts`
- Change the `app/component.html` to display the title

### Step 02 - Create manual components

We are going to create new component

- Create new folder named `server` under the `app` folder.
- Inside the folder create the following new files

  - `server.component.css`
  - `server.component.html`
  - `server.component.ts`

- Define the component in the `server.component.ts`  
  View the code to see whats is required.
- Register the component inside `app.module.ts`

### Step 03 - Create components using the CLI

Instead of creating manual components we will create one using the CLI commands.

- In your terminal type `ng generate component servers`  
  or short way: `ng g c servers`
- Update the html code to the `servers.component.html`

### Step 04 - Adding bootstrap CSS

- install bootstrap `npm i bootstrap`
- Add the bootstrap css path to the `.angular-cli.json`
- Add html code to verify that the css is loaded

### Step 05 - Data Binding

Data binding allow us to add dynamic content to the application.  
There are several forms of Binding. Lets start with the simple one

- Edit the `ServerComponent` inside the `server.component.ts` and add the variables and the method as appear in the source code
- Edit the template `server.component.html` and add the binding code to display the content

### Step 06 - Property Binding

At this step we update property using timer and the changes will be reflated in the code. We will add and update button state.

- Edit `servers.component.ts` and add the required code
- The syntax for property binding is `[<html properly>]=<angular property>`
- To bind attribute like dataset use the `[attr.<attribute name>]` => `[attr.data-allow]="allowNewServer"`

### Step 07 - Event Binding

- The syntax for adding an event binding is using `(<event name>)="<event handler>"`
- Edit `servers.component.ts` and add the required variables and methods
- Update the component html and add the required code. In this step we demonstrated the previous bindings as well.

### Step 08 - 2 way binding

In the previous step we have demonstrated 2 way binding. Lets dive into it now.

- 2Way binding allow us to display literal values of the property for example
- The syntax is combination of `[] && ()` => `[(ngModel)]`
- Add the import `FormsModule` inside the `app.module.ts` (import declaration & inside the imports array).
  **!NOte: `FormsModule` should be in `imports` not in `declarations`**
- Declare the `ngModel` inside our `servers.component.html`

### Step 09 - Directives

- Directives are html extensions (DOM) which are being created from templates (usually not always).
- Directives are usually attributes
- The syntax is `*` for example : `*ngIf=...`

  #### ngIf (Structural directive)

  - `ngIf` is used to conditionals display content.
  - The simple way is to use it as attribute
  - We can also us it with `local reference` for `if else` syntax

  #### ngStyle / ngClass

  - `ngStyle` is used to conditionally add style to an element.
  - `ngClass` is used to conditionally add css class to an element.
    - Add the required css code
    - Replace the `[attr.data-allow]="allowNewServer"` with ngClass code from the source

### Step 10 - Multiple components

Create multiple components and add communication between them

- For this step we will need to get familiar with `ngFor` Directive, so read about it before starting this step.
- You can simply checkout this step and copy the content. This steps will be used as placeholder for the content. If you wish to do it your self follow the steps below.
- Create the first component without testing specs `ng g c cockpit --spec false`
- Create the second component without testing specs `ng g c server-element --spec false`
- Copy the initial html code from the `cockpit.component.html` to your component
- Copy the content of the `server-element.component.html` into your component
- Copy the content of the `app.component.ts`
- Copy the content of the `app.component.html`

#### At this point the project should be broken and you will see the following message

`Property 'serverElements' does not exist on type 'CockpitComponent'.`

- To fix it for now we will comment out the code so we can continue.

### Step 11 - Binding custom properties

- Add the required code inside the `server-element.component.ts`. This code define our custom element
- Inside the `app.component.ts` define the `serverElements`, again copy it from the initial code.
- Add the `[element]` property to the `app.component.html`.  
  At this point we should see error (_in the browser console_) since the property can be accessed only from within `server-element` component and we are adding it to the app component
- In order to "expose" it to parent component we need to add `decorator` **`@Input()`** to the element.  
  Don't forget to add the required import as well

### Step 12 - Binding custom events

- In this step we want to notify the parent component that inner component was updated
- Update the `app.component.ts` with the event handlers code
- Update the `app.component.html` to support the new event we created
- Add the 2 custom event data in `cockpit.component.ts`. Make sure to expose them with `EventEmitter` & `@Output()`  
  Don't forget to add the required import as well
- Inside `cockpit.component.ts` fire (emit) the events

# Directives

---

### 13 - Attribute directives

- First lets start with attribute directives
- Create a new folder `src/app/directives/highlight`
- Create the directive file `src/app/directives/highlight/highlight.directive.ts`

  ```js
  import { Directive, ElementRef, OnInit } from '@angular/core';

  @Directive({
    selector: '[appBasicHighlight]'
  })

  export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
  }

  ```

- Register the directive in the app module
- Add the attribute directive to the app template
  ```html
  <div class="container">
    ...
    <p appHighlight>This is our appHighlight directive</p>
    ...
  </div>
  ```

### step14 - Directive Render

- Lets create a new directive and this time with the CLI command

  ```
  $ ng g d directives/text-highlight --spec false

  # We should now see the following output
  create src/app/directives/text-highlight.directive.ts
  update src/app/app.module.ts
  ```

- Add the required code to the `directives/text-highlight.directive.ts`
- Add the directive to the template and verify that its working

### step15 - Directive Events

- In this step we will interact with the directive
- In order to do it we need to add `HostListener` - which will be used for our mouse events
- Add the `HostListener` to the directive from previous step
  ```js
    @HostListener( <event_name>) <function_name> (<Event data>)
  ```

### step16 - Directive Properies (HostBinding)

- In this step we will be changing one of the nodes property like style, class etc.
- First of all add `HostBinding` to the directive
- Add the property we wish to bind to
  ```js
  # In our case we wish to bind the style.backgroundColor property
  @HostBinding('style.backgroundColor') bgColor: string;
  ```
- Update the code in the `HostListener`
  ```js
    @HostListener('mouseleave') mouseleave(event: Event) {
      this.bgColor = 'transparent';
      this.color = 'black';
    }
  ```

### step17 - Directive Properties (readProperty)

- Instead of having the colors hard code we wish to read them from the element
- First add the `Input` decorator

  ```js
  // Add the input fields
  @Input() defaultBgColor: string;
  @Input() hoverBgColor: string;

  // Initialize values

  ```

- Add the required attribute colors in `ngOninit`

  ```js
    ngOnInit() {

    // Set the defaults ...
    this.bgColor = this.defaultBgColor;
    this.color = this.defaultColor;

    ...

  ```

### step18 - Structural Directives

- In the previous steps we used attribute directives, now we will add structural directives
- Lets create a new directive using the CLI which wil be opposite to the ng-if
  ```
    ng g d unless --spec false
  ```
- We need to get the condition as input from the element so we need to add the `@Input`
- Since we also need to listen to changes we will add the `set` keyword to the `@Input`
  **The name of the property must be the same as the directive name**
  ```js
  @Input() set appUnless(condition: boolean) {}
  ```
- Add the contractor properties (template & view)
  ```js
  constructor(
    private templateRef: TemplateRef<any>,
    private vcRef: ViewContainerRef
  ) { }
  ```
- Now update the unless `@Input()` logic
  ```js
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    } else {
      this.vcRef.clear();
    }
  }
  ```
- Add the required code to the `app.component.html`
  ```html
  <div *appUnless="true">This is the content when *appUnless="true"</div>
  <div *appUnless="false">This is the content when *appUnless="false"</div>
  ```
- Practice:
  - Add property to the app component to control if the unless is visible or not

# Routing

---

### step 19 - Routing

- Extract the attached zip to new folder - This will be our sample application for this part
- We have multiple components loaded in the app component.
- We have navigation menu in the app which will be used to upload and display different part of the app
  ```html
  <ul class="nav nav-tabs">
    <li role="presentation" class="active"><a href="#">Home</a></li>
    <li role="presentation"><a href="#">Servers</a></li>
    <li role="presentation"><a href="#">Users</a></li>
  </ul>
  ```
- Add the routes to the app module.  
  The routs is a specific structure. `{ path : ... }`

```js
import { Routes } from '@angular/router';

...

const appRoutes: Routes = [
  {
    path: '<path to this route >',
    component: <Component for this route>
  }
];

// In our sample application it will look like:
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'servers', component: ServersComponent }
];
...

```

- Register the routes. Registering routes is done via the `RouteModules`

  - Add new import
  - Use the `forRoot` which add the routes to the angular application

  ```js
  import { Routes, RouterModule } from '@angular/router';
  ...

   imports: [
    ...
    RouterModule.forRoot(appRoutes)
    ...
  ],
  ```

### step 20 - router-outlet

- In this step we will set up the routing to display the content
- Edit the `./src/app/app.component.html` and replace the components with the `<router-outlet></router-outlet>` directive.
  - This tells angular where to display the content of the route

```html
<div class="row">
  <div class="col-xs-12 col-sm-10 col-md-8 col-sm-offset-1 col-md-offset-2">
    <router-outlet></router-outlet>
  </div>
</div>
```

- Open the browser and add the check to see if the routes are working as expected

  - http://localhost:4200/users
  - http://localhost:4200/servers

- Adding navigation - Use the nav links
  - Remove the `href="#"` from the nav items
  - Add the `router-link` directive with the appropriate link (The link is on the `<a>`)
  - Set the `routerLinkActive / routerLinkActiveOptions"` the current tab to mark it as active (`<li>`)

```html
<li ... routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
  <a routerLink="/">Home</a>
</li>
```

### step 21 - Routing from TypeScript

- Add some button to `./src/app/home/home.component.html`

```html
<button class="btn btn-primary" (click)="onLoadServers()">Load Servers</button>
```

- Add the following:
  - import
  - constructor declaration
  - required code (click handler = `onLoadServers` ) in the `./src/app/home/home.component.ts`

```js
export class HomeComponent implements OnInit {
  // Add the required router variable
  constructor(private router: Router) { }

  // The click handler
  onLoadServers() {
    this.router.navigate(['servers']);

  }

}
```

#### Routing with parameters

- Add parameter to the url in the `./src/app/app.module.ts` using the `<route>:<param>`
  - This will cause the `/users` to return error

```js
const appRoutes: Routes = [
  ...
  { path: 'users/:user_id', component: UsersComponent },
  ...
];
```

- Add the required imports and code and `ActiveRoute` to the `./src/app/users/user/user.component.ts`
- Read the parameters from the router using the `this.route.snapshot.params['<param>']`

```js
export class UserComponent implements OnInit {
  user: { id: number, name: string };

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.user = {
      id: this.route.snapshot.params['user_id'],
      name: this.route.snapshot.params['user_name'],
    }
  }

}
```

- Update the template `./src/app/users/user/user.component.html` to display the route values

```js
<p>User with ID
    <b>{{ user.id }}</b> loaded.</p>
<p>User name is
    <b>{{ user.name }}</b>
</p>
```

- Add new link which will pass parameters to the desired router
  - Edit the `./src/app/users/user/user.component.html`
  - Add the following syntax - (Directive) -> `[routerLink]="[ <params> ]"`

```html
<a [routerLink]="['/users','1','Moshe !!!!']">Load user</a>
```

# Services & Injections

---

- Services are usually a shared classes (code) which is used across the whole application.
- For example, service can be used for translation, Date formatting or any other utils or filtering.
- Good tutorial can be found here: <a href="https://code.tutsplus.com/tutorials/beginners-guide-to-angular-4-services--cms-29675">
  beginners-guide-to-angular-4-services</a>
- Services are used with <a href="https://angular.io/guide/dependency-injection">Angular Dependency Injection</a>

### step 22 - Services

- Checkout the <a href="services-start.zip">attached zip<a/> and extract it to a new folder
- Initialize and execute the application

```sh
  cd <app folder>
  npm i
  ng serve
```

- Run the application
  - View the code and try to figure out what the app does
  - How data is passed between the different components
  - Check the `console` for the output

#### Services

- Lets write our first service
- Our service will be a simple logger which will replace the `console.log` across the application

- Create a new class `services-start/src/app/logging.service.ts`
- Service is a just a regular JS class

```js
/**
 * Service is just a simple js class.
 * Our service will simply log our messages to the console
 *
 * - No decorator is required.
 * - The service will be injected into the components and or directives
 */
export class LoggingService {
  // class method
  logStatusChange(status: string) {
    console.log(`[Service] - New status: ${status}`);
  }
}
```

- Inject the service to the required modules
- The injection is done by adding the service we need into the constructor
- Add the required import (the `LoggingService`)
- Add the service provider. Provider tells Angular which service we will need
- In the constructor we **must** declare the specific type

```js
// services-start/src/app/new-account/new-account.component

...
import { LoggingService } from '../logging.service';
...

@Component({
  ...
  // Add the required service as provider attribute of the Component
  providers: [LoggingService]
})
...

export class NewAccountComponent {
  ...
  // Add the Constructor with the Service injection
  // Make sure to specify the required type
  constructor( private logger: LoggingService){}
  ...
}

```

- Search for all `console.log` in other components and convert them to the `LoggingService`
  - Tip: In Visual studio code you can simply add the provider list and the import will be added automatically

```js
...

export class NewAccountComponent {
  ...
  onCreateAccount(accountName: string, accountStatus: string) {
    ...
    // Use the Service to log messages
    this.logger.logStatusChange('New status: ' + accountStatus);
  }
}

```

- Verify that the code is working and that the `console.log` is printed out from the service.

### step 23 - Data Services

- Data services are used to store data
- Lets create service for storing the AccountData
- Create new service file `services-start/src/app/accounts.service.ts`
- Move the code from the `AppComponent` to the new service file

```js
/**
 * This service will store our accounts data
 */
export class AccountsService {
  // Remove the code from the app components and paste it here
  accounts = [
    { name: "Master Account", status: "active" },
    { name: "Test Account", status: "inactive" },
    { name: "Hidden Account", status: "unknown" },
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
}
```

- Since we have an accounts in the `services-start/src/app/app.component.html` we need to read them from the service

```html
<app-account
  *ngFor="let acc of accounts; let i = index"
  [account]="acc"
  [id]="i"
  (statusChanged)="onStatusChanged($event)"
></app-account>
```

- Add the service to the `services-start/src/app/app.component.ts`
  - Import
  - Provider
  - Constructor
- Initialization should be done inside the `OnInit`

```js
// app.component.ts

import { AccountsService } from './accounts.service';
...
@Component({
  ...
  providers: [AccountsService]
})
export class AppComponent implements OnInit {

  // Add the accounts array. The content will be loaded from the service
  accounts: { name: string, status: string }[] = [];

  // Inject the service
  constructor(private accountsService: AccountsService) { }

  // initialize the accounts data
  ngOnInit() {
    // Get the accounts from the service
    this.accounts = this.accountsService.accounts;
  }

}

```

- Update the `NewAccountComponent`
  - Remove the `EventEmitter` since its now part of the service
  - Add imports & update the code

```js

// Add the service imprt
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

export class NewAccountComponent {
  constructor(
    private logger: LoggingService,
    private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountsService.addAccount(accountName, accountStatus);
    this.logger.logStatusChange('New status: ' + accountStatus);
  }
}
```

- Update the `AccountComponent` as well and remove the unused code

```js
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  // Add the Constructor with the Service injection
  // Make sure to specify the required type
  constructor(
    private logger: LoggingService,
    private accountsService: AccountsService
  ) {

  }
  onSetTo(status: string) {
    this.accountsService.updateStatus(this.id, status);
    this.logger.logStatusChange('New status: ' + status);
  }
}
```
