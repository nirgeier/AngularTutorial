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
