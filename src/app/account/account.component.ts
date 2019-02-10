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
