# SIT725 - Weekly workshop overview

## Week 3 overview

This is a demo application for the SIT 725 Week 3 practical assignment. The project showcases various components of Materialize CSS and demonstrates dynamic card generation, modal form submission, 
and interaction with the user through alerts and forms. 

### Key Features:
- **Dynamic Card Generation**: Cards are generated dynamically from a predefined list of items, each with images, titles, descriptions, and links.
- **Modal Form**: A modal form with fields for First Name, Last Name, Password, and Email. When the form is filled and submitted, a success message is displayed.
- **Responsive Design**: The application is responsive and adapts to different screen sizes using Materialize CSS framework.
- **JavaScript Integration**: The project uses custom JavaScript for dynamic functionality, such as card creation, modal handling, and form submission.

## What Was Done

### Features Implemented:
1. **Card Generation**: Created a list of items with images and descriptions. These items are displayed as cards on the webpage.
2. **Modal**: Implemented a modal form that pops up when the user clicks the "Click Me" button. The form contains:
   - First Name
   - Last Name
   - Password
   - Email
3. **Form Submission**: Upon submitting the form, an alert is displayed thanking the user, and the form data is printed to the console.
4. **Layout**: The first name and last name fields in the form are placed on the same line using CSS Flexbox.
5. **User Experience**: Added user interaction features such as alerts when clicking the button and successful form submission.

### Technologies Used:
- **HTML**: For creating the structure of the page.
- **CSS**: Materialize CSS for responsive design, custom styles for custom layout.
- **JavaScript**: For handling dynamic card creation, form modal opening, and form submission logic.
- **jQuery**: Used for DOM manipulation and event handling.
- **Materialize CSS**: A modern responsive framework based on Material Design.

## Steps Followed

1. **Set Up Basic HTML Structure**: Created a basic webpage structure with a navigation bar and content area using HTML.
2. **Include Materialize CSS**: Integrated Materialize CSS for styling and UI components.
3. **Dynamic Card Generation**: Used JavaScript to create an array of items (kitten images) and dynamically generate cards for each item using the Materialize card component.
4. **Modal Creation**: Added a modal that appears when the "Click Me" button is pressed, containing a form for the user to fill out.
5. **JavaScript for Form Handling**: Created JavaScript functions to handle form submission, including displaying an alert and printing form data to the console.
6. **Added Responsive Features**: Ensured that the layout is responsive using Materialize's grid system and Flexbox for the form fields.

## Week 4 - Backend Server and Database Integration
### Overview
In Week 4, we focused on integrating a backend server and setting up a database for our project. The frontend code remains the same as the previous weeks, but we now have backend support with MongoDB integration.

### Key Changes:
- Created a Week-4 folder to store all the backend and database-related code.
- Introduced server-side integration using Node.js and Express.
- Set up a MongoDB database (via MongoDB Atlas) for storing form data.
- Integrated Mongoose for MongoDB interaction, allowing us to store and retrieve form submissions from the database.
- Updated the project to connect the frontend with the backend, enabling data submission via a form and storing it in the  MongoDB database.
- The backend exposes API endpoints to:
- Fetch project data (/api/projects)
- Submit form data (/api/submit-form)
- Ensured CORS support for frontend-backend communication.

## Backend and Database Setup:
### Backend Server:
We created a Node.js server using Express that handles incoming requests, connects to the database, and returns responses to the frontend.

### Database:
- MongoDB Atlas was used to host our MongoDB database.
- Mongoose was used to define the schema for the data and handle interactions with MongoDB.
- Form submissions are saved into the database under the formdatas collection.

### API Endpoints:
- GET /api/projects: Returns dummy project data for the frontend.
- POST /api/submit-form: Saves form data to the MongoDB database (first name, last name, and email).

## How to Run the Project
- run app using "node server.js"
- Ensure that MongoDB Compass or any MongoDB client is connected to database.
- Open the application using "http://localhost:3000/", submit the "CLICK ME" form, and check MongoDB Compass to see if the data is saved.
- The form data should appear under the formdatas collection in the database.

## 5.2C (MVC-Structured Node.js App) 
This project is a Node.js and Express application following the MVC pattern, connected to MongoDB Atlas for handling form submissions via a REST API.

### Setting Up MVC Structure
* Restructure Files: Organize project into models/, controllers/, routes/, and services/.
* Define the Model: Create a Mongoose schema in models/formModel.js.
* Create the Controller: Implement form handling logic in controllers/formController.js.
* Set Up Routes: Define API endpoints in routes/formRoute.js and link them to the controller.
* Implement Services (Optional): Add database interaction logic in services/formService.js.
* Update server.js: Import routes and start the Express server on port 8000.

### Testing the API
* Start the Server: Run
* Use Postman to Test Endpoints:
* POST /api/submit-form → Submit a form
* GET /api/forms → Fetch all forms
* GET /api/forms/:id → Fetch a single form
* PUT /api/forms/:id → Update a form
* DELETE /api/forms/:id → Delete a form

## Note: Verify in MongoDB Compass: Ensure submitted data appears in your MongoDB Atlas database.

# Week 6 - API Testing with Mocha, Chai, and Request

## Overview

In this week's practical, we focused on implementing **unit tests** for our Express.js API using testing tools like **Mocha**, **Chai**, and **Request**. The endpoint `/addTwoNumbers/:firstNumber/:secondNumber` was used to demonstrate API functionality and test coverage.

We Implemented a new API route:
This route returns the sum of two numbers and responds with:
- `statusCode: 200` if inputs are valid numbers
- `statusCode: 400` if inputs are invalid (e.g., strings)

- Created automated tests using:
- `mocha` – testing framework
- `chai` – assertion library
- `request` – for making HTTP requests during tests

How to Run Tests

# Update package.json with the test scripts:
"scripts": {
  "start": "node server.js",
  "test": "mocha --reporter spec"}

#  Start the Server
Make sure the server is running on port `8000`:
```bash
node server.js

# Run the Test Suite
npm test

# Task 7.2P - Change Text Real-Time App using Socket.IO

## Overview

This project is a real-time web application that allows users to click a button to generate and display a random number. The application leverages **Socket.IO** for real-time communication between the server and the client, providing an interactive experience where multiple clients can see the same updated number without reloading the page.

#Install Dependencies

To get started, you'll need to install the required dependencies. Run the following command in your terminal: npm install express socket.io

* Server setup
The app uses Express to serve the frontend and Socket.IO for real-time client-server communication. The server listens for a change_text event from the client, generates a random number, and emits this number to all connected clients via the number event.

**  Frontend setup
The index.html file uses Materialize CSS for the layout and Socket.IO client library to communicate with the server. The page includes a button that triggers the random number generation when clicked. The generated number is displayed in an <h1> element.

*** Client-Side Logic
The scripts.js file connects to the server via Socket.IO. Upon clicking the Change Text button, a change_text event is emitted to the server. When the server responds with a new number, the page dynamically updates the displayed text.

***** Start the Server
node server.js

Visit http://localhost:3000 in your browser. You should see the page with a Change Text button.

- Click the button, and the page will update in real-time with a random number generated by the server.
- Right click and select inspect and go to console to observe Socket behaviour


### Prerequisites:
- **A modern browser** (Google Chrome, Firefox, etc.)
- **Local Server (Optional)**: If you want to run the project locally on a server, you can use an IDE like Visual Studio Code with Live Server extension or any local server.

### Steps:
1. Clone this repository to your local machine: https://github.com/akindada/SIT725-tasks.git
