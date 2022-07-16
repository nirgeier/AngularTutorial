/**
 * This service will store our accounts data
 */
export class AccountsService {

    // Remove the code from the app componenets and paste it here
    accounts = [
        { name: 'Master Account', status: 'active' },
        { name: 'Testaccount', status: 'inactive' },
        { name: 'Hidden Account', status: 'unknown' }
    ];

    addAcount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
    }

    updateStatus(id: number, newStatus: string) {
        this.accounts[id].status = newStatus;
    }
}