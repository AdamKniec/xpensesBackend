export {};

const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const dotenv = require("dotenv");
const expensesRoutes = require("./routes");

dotenv.config();

const app = express();
const port = 5001;
const pass = process.env.MONGO_USER_PASSWORD;

app.use("/", expensesRoutes);

MongoClient.connect(
  `mongodb+srv://adas:${pass}@xpenses.lxcl9.mongodb.net/xpenses?retryWrites=true&w=majority`
)
  .then(
    () => console.log("Succesfully connected to database"),
    app.listen(port)
  )
  .catch((err: any) => console.log(err)); // TODO -> Get rid of any
