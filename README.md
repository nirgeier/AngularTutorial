# Part 03 -Services & Injections
- Services are usually a shared classes (code) which is used across the whole application.
- For example, service can be used for translation, Date formatting or any other utils or filtering.
- Good tutorial can be found here: beginners-guide-to-angular-4-services
- Services are used with Angular Dependency Injection

### Step 01 - KickStart
- Checkout the initial source code 
  ```sh
  git checkout $(git log --grep "Step01 - KickStart" --format="%h")
  ```
- Run the application
- View the code and try to figure out what the app does
- How data is passed between the different components
- Check the console for the output

---
### Step 02 - Services
- Lets write our first service
- Our service will be a simple logger which will replace the `console.log` across the application
- Create a new service 
  ```js
  ng g s logging --skipTests
  ```
- Service is a just a regular JS class and no decorators are required
- Update the [`src/app/logging.service.ts`](src/app/logging.service.ts) and add the `logStatusChange` method
  ```js
  import { Injectable } from '@angular/core';

  @Injectable({
    providedIn: 'root'
  })
  /**
   * Service is just a simple js class.
   * Our service will simply log our messages to the console
   * 
   * - No decorator is required.
   * - The service will be injected into the components and or directives
   */
  export class LoggingService {

    constructor() { }

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
-[`src/app/account/account.component.ts`](src/app/account/account.component.ts)
  ```js
  import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
  import { LoggingService } from '../logging.service';

  @Component({
    selector: 'app-account',
    templateUrl: './account.component.html',
    styleUrls: ['./account.component.scss']
  })
  export class AccountComponent implements OnInit {
    @Input() account: { name: string, status: string };
    @Input() id: number;
    @Output() statusChanged = new EventEmitter<{ id: number, newStatus: string }>();

    // Add the Constructor with the Service injection
    // Make sure to specify the required type
    constructor(private logger: LoggingService) { }

    ngOnInit() {
    }

    onSetTo(status: string) {
      this.statusChanged.emit({ id: this.id, newStatus: status });
      this.logger.logStatusChange('A server status changed, new status: ' + status);
    }
  }

  ```
- Add the logger to [`src/app/new-account/new-account.component.ts`](src/app/new-account/new-account.component.ts)
  ```js
    import { Component, OnInit, Output, EventEmitter } from '@angular/core';
  // Add the service import
  import { LoggingService } from '../logging.service';
  @Component({
    selector: 'app-new-account',
    templateUrl: './new-account.component.html',
    styleUrls: ['./new-account.component.scss'],

    // Add the required service as provider attribute of the Component 
    providers: [LoggingService]
  })

  export class NewAccountComponent implements OnInit {

    @Output() accountAdded = new EventEmitter<{ name: string, status: string }>();

    // Add the Constructor with the Service injection
    // Make sure to specify the required type
    constructor(private logger: LoggingService) { }

    ngOnInit() {
    }

    onCreateAccount(accountName: string, accountStatus: string) {
      this.accountAdded.emit({
        name: accountName,
        status: accountStatus
      });
      this.logger.logStatusChange('A server status changed, new status: ' + accountStatus);
    }
  }
  ```