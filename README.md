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

### Prerequisites:
- **A modern browser** (Google Chrome, Firefox, etc.)
- **Local Server (Optional)**: If you want to run the project locally on a server, you can use an IDE like Visual Studio Code with Live Server extension or any local server.

### Steps:
1. Clone this repository to your local machine: https://github.com/akindada/SIT725-tasks.git
