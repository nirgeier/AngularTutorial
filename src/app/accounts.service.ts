import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  // Remove the code from the app components and paste it here
  accounts = [
    { name: 'Master Account', status: 'active' },
    { name: 'Test Account', status: 'inactive' },
    { name: 'Hidden Account', status: 'unknown' }
  ];

  addAccount(name: string, status: string) {
    this.accounts.push({ name: name, status: status });
  }

  updateStatus(id: number, newStatus: string) {
    this.accounts[id].status = newStatus;
  }
} 