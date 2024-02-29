# Travel Agency Application
This is a simple web application for managing travel agencies. It allows users to create, update, and delete travel agencies.

## Installation
Install dependencies using npm:
    npm install express mongoose body-parser nodemon

## Running the Application
After installing the dependencies, you can start the application by running the following command:
Node server.js
This will start the server, and the application will be accessible at 
http://localhost:3000

## Dependencies
The following npm packages are used in this project:
- `express`: Web framework for handling HTTP requests.
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment.
- `body-parser`: Middleware for parsing JSON and URL-encoded request bodies.
- `nodemon`: Utility that monitors for changes in the source code and automatically restarts the server.

## Usage
- To create a new travel agency, fill out the form at the top of the page with the agency's name, location, and contact information, and then click the "Create Agency" button.
- Existing agencies are displayed in the list below the form. Each agency card includes options to delete or update the agency information.
- Click the "Delete Agency" button to remove an agency from the list. This action cannot be undone.
- Click the "Update Agency" button to modify the information of an existing agency. You will be prompted to enter new values for the agency's name, location, and contact information.

## Server Port
The server runs on the default port 3000. You can access the application at http://localhost:3000 

This documentation provides clear instructions on how to install and run the application, lists the npm packages used, and explains how to use the application features. It also specifies that the server runs on the default port 3000.
