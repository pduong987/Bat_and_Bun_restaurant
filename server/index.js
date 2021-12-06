import path from 'path';
import express from 'express';
import dotenv from 'dotenv';
import databaseConnector from './database.js';
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/batnbun';
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';
const __dirname = path.resolve();

dotenv.config();

const app = express();

databaseConnector(MONGODB_URI).then(() => {
    console.log("Database connected successfully!");
}).catch(error => {
    console.log(`
    Some error occured connecting to the database! It was: 
    ${error}
    `);
});

// PRODUCTION: Serve static build client
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  }
);

app.listen(PORT, HOST, console.log(`Server listening at http://${HOST == "0.0.0.0" && "localhost"}:${PORT}/`));
