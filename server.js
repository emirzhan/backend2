const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const travelRoutes = require('./travelRoutes');
const travelAgencyController = require('./travelAgencyController'); // Import the controller module


const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

// Connect to MongoDB
mongoose.connect('mongodb+srv://emirzhancool:qawsedrf@cluster0.1pyshpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');

// Routes
app.use('/travelagency', travelRoutes);

// Handle form submissions
app.post('/create', travelAgencyController.createAgency);
app.put('/update/:id', travelAgencyController.updateAgency);
app.delete('/delete/:id', travelAgencyController.deleteAgency);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
