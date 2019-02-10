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
