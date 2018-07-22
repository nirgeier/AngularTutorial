import { Component, Input } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: { name: string, status: string };
  @Input() id: number;

  // Add the Constructor with the Service injection
  // Make sure to specify the required type
  //
  // Since we dont add the AccountsService to the provider list it will be inherited from the 
  // top component and will be injected here. This way we can share the service and have a
  // single instance for the entire application
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
