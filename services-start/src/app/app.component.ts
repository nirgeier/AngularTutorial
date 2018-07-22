import { Component, OnInit } from '@angular/core';
import { AccountsService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
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
