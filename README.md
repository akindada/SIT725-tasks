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

In Week 4, we focused on integrating a backend server and setting up a database for our project. The frontend code remains the same as the previous weeks, but we now have backend support.

### Key Changes:
- Created a `Week-4` folder to store all the backend and database-related code.
- Introduced server-side integration using Node.js and Express.
- Set up a database (e.g., MongoDB or another choice).
- Updated the project to connect the frontend with the backend.

## How to Run the Project

### Prerequisites:
- **A modern browser** (Google Chrome, Firefox, etc.)
- **Local Server (Optional)**: If you want to run the project locally on a server, you can use an IDE like Visual Studio Code with Live Server extension or any local server.

### Steps:
1. Clone this repository to your local machine: https://github.com/akindada/SIT725-tasks.git
