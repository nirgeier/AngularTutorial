# Part 02 - Routing 

**In this section we will start a new project from fresh**

### Step 01 - Create Project skeleton
- Lets first create the app
  ```sh
  ng new routing-app

  # Answer yes here
  Would you like to add Angular routing? (y/N)

  # Choose scss on this section
  ? Which stylesheet format would you like to use? (Use arrow keys)
  > CSS
    SCSS   [ http://sass-lang.com   ]
    SASS   [ http://sass-lang.com   ]
    LESS   [ http://lesscss.org     ]
    Stylus [ http://stylus-lang.com ]
  ```

### Adding bootstrap CSS
- install bootstrap `npm i bootstrap`
- Add the bootstrap css path to the angular.json (Add the `css` and not the `scss`)
  ```sh 
  "styles": [
      "src/styles.scss",
      "./node_modules/bootstrap/dist/css/bootstrap.min.css"
  ],
  ```

- Add the following navigation to the [`src/app/app.component.html`](src/app/app.component.html)
  ```html
  <nav class="navbar navbar-dark bg-dark flex-column">
    <ul class="navbar-nav bd-navbar-nav flex-row">
      <li class="nav-item">
        <a class="nav-link mx-2"
          href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-2"
          href="#">Servers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-2"
          href="#">Users</a>
      </li>
    </ul>
  </nav>
  ```
#### Generate the required components
- Create the following components
  ```sh
  # Using the git bash we can do it with one line,
  # otherwise create them separately
  for i in home servers users; do ng g c "${i}" --skipTests=true; done

  ### Manually creation
  ng g c home --skipTests=true
  ng g c users --skipTests=true
  ng g c servers --skipTests=true
  ```

---
### Step 02 - Add routes and content
- In this step we will be adding the site navigation.
- We will define the navigation using Angular `Routers`.
- You'll configure the router with `Routes` in the `RouterModule`
- `RouterModule.forRoot(...)` - Initialize the router and start it listening for browser location changes.
- In order to be able to use the navigation you'll need to import `HttpClientModule`, `Routes` & `RouterModule` in the [`src/app/app.module.ts`](src/app/app.module.ts)
- The `Routes` has a specific structure. `{ path : ... , component: ... }`
  ```js
  const appRoutes: Routes = [{
      path: '<path to this route>',
      component: <Component for this route>
    }];
  ```
- You'll register the routes using the `RouteModules`.
- The `RouterOutlet` is one of the **`router directives`** which display the router content.
- [`src/app/app.module.ts`](src/app/app.module.ts)
  ```js
  import { BrowserModule } from '@angular/platform-browser';
  import { NgModule } from '@angular/core';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { HomeComponent } from './home/home.component';
  import { UsersComponent } from './users/users.component';
  import { ServersComponent } from './servers/servers.component';
  import { ServersService } from './servers.service';

  // The required imports
  import { Routes, RouterModule } from '@angular/router';
  import { HttpClientModule } from '@angular/common/http';

  // The path should be without the leading '/'
  const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'users', component: UsersComponent },
    { path: 'servers', component: ServersComponent }
  ];

  @NgModule({
    declarations: [
      AppComponent,
      HomeComponent,
      UsersComponent,
      ServersComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      // Register the routes defined above
      RouterModule.forRoot(appRoutes)
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```
---
### Step 03 - `router-outlet`
- Now we have to "tell" the applicaton where we want the content to be loaded. We will use the `<router-outlet></router-outlet>` directive for this purpose.

  ### `<router-outlet></router-outlet>`

  > Acts as a placeholder that Angular dynamically fills based on the current router state.

  - Code samples
  ```html
  <router-outlet></router-outlet>

  <!-- With names -->
  <router-outlet name='left'></router-outlet>
  <router-outlet name='right'></router-outlet>

  <!-- With events -->
  <router-outlet
    (activate)='onActivate($event)'
    (deactivate)='onDeactivate($event)'>
  </router-outlet>
  ```

- Update the app template [`src/app/app.component.html`](src/app/app.component.html) and add the `<router-outlet></router-outlet>` and the right links (routes)
  ```html
  <nav class="navbar navbar-dark bg-dark flex-column">
    <ul class="navbar-nav bd-navbar-nav flex-row">
      <li class="nav-item">
        <a class="nav-link mx-2" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-2" href="/servers">Servers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-2" href="/users">Users</a>
      </li>
    </ul>
  </nav>
  <div class="row justify-content-center">
    <router-outlet></router-outlet>
  </div>
  ```
- At this point the app is refreshing the browser since we have `<a href=...>`.

---
### Step 04 - `routerLink`
- We want the browser to display the  content without refreshing, to do so we will use `routerLink`. 
- Update [`src/app/app.component.html`](src/app/app.component.html) and add the `routerLink`
  ```html
  <nav class="navbar navbar-dark bg-dark flex-column">
    <ul class="navbar-nav bd-navbar-nav flex-row">
      <li class="nav-item">
        <a  class="nav-link mx-2"
            routerLink="/">Home</a>
      </li>
      <li class="nav-item">
        <a  class="nav-link mx-2"
            routerLink="/servers">Servers</a>
      </li>
      <li class="nav-item">
        <a  class="nav-link mx-2"
            routerLink="/users">Users</a>
      </li>
    </ul>
  </nav>
  <hr />
  <div class="row justify-content-center">
    <router-outlet></router-outlet>
  </div>
  ```
  - Test the application and verify that the browser does not reload and that the right content is displayed.
---
### Step 05 - Multiple `router-outlet`
- Add multiple `router-outlet` in [`src/app/app.component.html`](src/app/app.component.html)
  ```html
  <div class="row justify-content-center">
    <router-outlet name="left"></router-outlet>
    <router-outlet></router-outlet>
    <router-outlet name="right"></router-outlet>
  </div>
  ``` 
- Now we want to load the content in a diffrent `router-outlet`. To do so we will define in which outlet we want each route
  ```html
  <a ... [routerLink]="[{ outlets: { 'left': 'servers'}}]">Servers</a>
  ```

- We need to update the routes in [`src/app/app.module.ts`](src/app/app.module.ts)  
  ```js
  const appRoutes: Routes = [
    ...
    { path: 'servers', component: ServersComponent, outlet: 'left' }
  ];
  ``` 
  - Test to verify that the componet is loaded in the destinated outlet
---
### Step 06 `routerLinkActive`, `routerLinkActiveOptions`
  
  Directive                 | Purpose
  --------------------------|--------
  `routerLinkActive`        | Add class to the nav tab to mark it as active (current)
  `routerLinkActiveOptions` | Configure routerLinkActive by passing {exact: true}. 

- Add the following `routerLinkActive` &&`routerLinkActiveOptions` to the navigation menu and test it.
  ```html
    <a ... 
    routerLinkActive="active font-weight-bold"
    [routerLinkActiveOptions]="{ exact:true }
  ```
- Full template code: [`/src/app/app.component.html`](/src/app/app.component.html)
  ```html
  <nav class="navbar navbar-dark bg-dark flex-column">
    <ul class="navbar-nav bd-navbar-nav flex-row">
      <li class="nav-item">
        <a class="nav-link mx-2"
          routerLink="/"
          routerLinkActive="active font-weight-bold"
          [routerLinkActiveOptions]="{ exact:true }">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-2"
          [routerLink]="[{ outlets: { 'left': 'servers'}}]"
          routerLinkActive="active font-weight-bold"
          [routerLinkActiveOptions]="{ exact:true }">Servers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link mx-2"
          routerLink="/users"
          routerLinkActive="active font-weight-bold"
          [routerLinkActiveOptions]="{ exact:true }">Users</a>
      </li>
    </ul>
  </nav>
  <div class="row justify-content-center">
    <router-outlet name="left" class="m-3"></router-outlet>
    <router-outlet class="m-3"></router-outlet>
    <router-outlet name="right" class="m-3"></router-outlet>
  </div>
  ```
---
### Step 07 - Routing from TypeScript
- In this step we will learn how to use router (navigate) within the code (ts).
- We will add buttonm when teh button is clicked the eventHandler in teh component will load teh required route.
- Add button to the home component 
[`src/app/home/home.component.html`](src/app/home/home.component.html)
```html
<p>
  home works!
  <br />
  <button class="btn btn-primary"
          (click)="onLoadUsers()">Load Users</button>
</p>
```
- Implement the event handler in the [`src/app/home/home.component.ts`](src/app/home/home.component.ts)
    - Add the `Router` import
    - Update the constructor
    - Implement the event handler
    ```js
    import { Router } from "@angular/router";
    ...
    constructor(private router: Router) { }
    ...
    
    onLoadServers() {
      this.router.navigate(['users']);
    }
    ```
- The entire (completed) code [`src/app/home/home.component.ts`](src/app/home/home.component.ts)   
  ```js
  import { Component, OnInit } from '@angular/core';
  import { Router } from "@angular/router";

  @Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
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
  ```
