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
