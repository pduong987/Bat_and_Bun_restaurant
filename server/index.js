const path = require("path");
const cors = require("cors");
const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const databaseConnector = require("./database");
const itemRoutes = require("./routes/itemRoutes");
const orderRoutes = require("./routes/orderRoutes.js");

<<<<<<< HEAD
const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost:27017/batnbun";
const PORT = process.env.PORT || 5999;
const HOST = "0.0.0.0";
=======
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/batnbun';
const PORT = process.env.PORT || 5999;
const HOST = '0.0.0.0';
>>>>>>> main

__dirname = path.resolve();

const app = express();

app.use(cors());

databaseConnector(MONGODB_URI)
  .then(() => {
    console.log("Database connected successfully!");
  })
  .catch((error) => {
    console.log(`
    Some error occured connecting to the database! It was: 
    ${error}
    `);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/items", itemRoutes);
app.use("/orders", orderRoutes);

// PRODUCTION: Serve static build client
app.use(express.static(path.join(__dirname, "/client/build")));
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(
  PORT,
  HOST,
  console.log(
    `Server listening at http://${HOST == "0.0.0.0" && "localhost"}:${PORT}/`
  )
);
