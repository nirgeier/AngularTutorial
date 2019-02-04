import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onLoadUsers() {
    this.router.navigate(['users']);

    // We can also add { relativeTo... } if we wish to upload relative 
    // links inside this route
    // 
    // this.router.navigate(['users'], { relativeTo : this.route});
    //
  }
}
