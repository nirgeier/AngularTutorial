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

