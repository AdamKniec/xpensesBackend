export {};

const MongoClient = require("mongodb").MongoClient;
const express = require("express");
const dotenv = require("dotenv");
const expensesRoutes = require("./routes");
const RequestType = require("express");
const ResponseType = require("express");

dotenv.config();

const app = express();
const port = 5001;
const pass = process.env.MONGO_USER_PASSWORD;

app.use(express.json());

app.use((req: typeof RequestType, res: typeof ResponseType, next: any) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE");
  next();
});

app.use("/", expensesRoutes);

MongoClient.connect(
  `mongodb+srv://adas:${pass}@xpenses.lxcl9.mongodb.net/xpenses?retryWrites=true&w=majority`
)
  .then(
    () => console.log("Succesfully connected to database"),
    app.listen(port)
  )
  .catch((err: any) => console.log(err)); // TODO -> Get rid of any
