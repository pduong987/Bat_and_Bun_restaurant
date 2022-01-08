const path = require('path');
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const databaseConnector = require('./database');
const itemRoutes = require('./routes/itemRoutes');
const orderRoutes = require('./routes/orderRoutes.js');

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/batnbun';
const PORT = process.env.PORT || 5999;
const HOST = '0.0.0.0';

path.resolve();

const app = express();

app.use(cors());

databaseConnector(MONGODB_URI).then(() => {
    console.log("Database connected successfully!");
}).catch(error => {
    console.log(`
    Some error occured connecting to the database! It was: 
    ${error}
    `);
});

app.use(express.json());
app.use(express.urlencoded({extended:true}));

// ROUTES
app.use('/items', itemRoutes);
app.use('/orders', orderRoutes);

console.log(__dirname);

// PRODUCTION: Serve static build client
app.use(express.static(path.join(__dirname, '/client/build')));
app.get('*', (req, res) => {
    // res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    res.sendFile(path.resolve('/app', 'client', 'build', 'index.html'))
  }
);

app.listen(PORT, HOST, console.log(`Server listening at http://${HOST == "0.0.0.0" && "localhost"}:${PORT}/`));
