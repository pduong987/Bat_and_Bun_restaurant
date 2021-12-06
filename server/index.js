import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
// Import the database connection function
import databaseConnector from './database.js';
// Establish what the database URL is going to be
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/batnbun';
// Connect to the database using the URL
databaseConnector(MONGODB_URI).then(() => {
    console.log("Database connected successfully!");
}).catch(error => {
    console.log(`
    Some error occured connecting to the database! It was: 
    ${error}
    `)
});


app.listen(PORT, console.log(`Server running on port ${PORT}`));