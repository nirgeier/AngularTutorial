// This file will contain our new Component
// A Component is simply a TypeScript class

// Import the Component package
import { Component } from "@angular/core";

// Create our first Component
// Tell angular that this is a component and not simple TS class 
@Component({
  // Configure the Component so angular can know what to do with this class.

  // The html selector for this component (unique selector)
  // In our case this is server component
  selector: 'app-server',

  // The template of this component
  templateUrl: './server.component.html'

})

export class ServerComponent {


}
