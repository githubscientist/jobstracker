# Jobs Tracker

A simple jobs tracker to keep track of your job applications.

## Features

- Add new job applications
- Edit existing applications
- Delete applications
- Filter applications by status
- Search applications by company name
- Sort applications by date applied

## REST API

- It is an architectural style that allows communication between different software systems over HTTP.
- REST stands for Representational State Transfer.
- It uses standard HTTP methods like GET, POST, PATCH, PUT, DELETE.

Example:

GET http://api.example.com/jobs ->

## API

- Application Programming Interface (API).
- A set of rules and protocols for building and interacting with software applications.

### MVC Architecture

- Model-View-Controller (MVC) is a software architectural pattern.
- It separates an application into three main components:
  - Model: Manages the data and business logic.
  - View: Displays the data to the user.
  - Controller: Handles user input and interacts with the model to update the view.
- This separation allows for better organization and maintainability of code.

Other Patterns like MVC:

1. MVVM (Model-View-ViewModel)
   - Used in frameworks like Angular and Knockout.js.
2. MVP (Model-View-Presenter)
   - Used in frameworks like GWT (Google Web Toolkit).

### Rendering

- Rendering is the process of generating a visual representation of data.
- In web applications, rendering typically involves converting data into HTML, CSS, and JavaScript.

- Rendering can be done on the server-side or client-side.
- Server-side rendering (SSR)
  - In SSR, the server generates the HTML content.
  - The browser receives the fully rendered HTML page.
  - This approach is beneficial for SEO and initial load performance.
- Client-side rendering (CSR)
  - In CSR, the browser downloads a minimal HTML page.
  - The JavaScript code is executed.
  - API calls are made from the JavaScript code to fetch data.
  - The data is then rendered in the browser.

Next.js is a framework that supports both server-side rendering (SSR) and static site generation (SSG).
