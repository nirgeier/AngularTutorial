import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  // Add the user details
  user: { id: number, name: string };

  // Add the current router to the constructor
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // Get the data from the router.
    // Fetch the data from the route

    // Read params when loading the component
    this.user = {
      id: this.route.snapshot.params['user_id'],
      name: this.route.snapshot.params['user_name'],
    }
    // subscribe for changes in the paramters to lod diffrent users
    // this.route.params.subscribe(params => {
    //   this.user.id = +params['user_id']; // (+) converts string 'id' to a number
    //   this.user.name = params['user_name']; // (+) converts string 'id' to a number
    // });
  }

}
