import { Component } from '@angular/core';

// Add the service imprt
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],

  // Add the required service as provider attribute of the Componenet 
  providers: [LoggingService]
})

export class NewAccountComponent {

  // Add the Constructor with the Service injection
  // Make sure to specify the required type
  // Since we dont add the AccountsService to the provider list it will be inherited from the 
  // top component and will be injected here. This way we can share the service and have a
  // single instance for the entire application
  constructor(
    private logger: LoggingService,
    private accountsService: AccountsService) { }

  onCreateAccount(accountName: string, accountStatus: string) {
    // Use the accounts service to add account
    this.accountsService.addAcount(accountName, accountStatus);

    // Use the Service to log messages
    this.logger.logStatusChange('New status: ' + accountStatus);
  }
}
