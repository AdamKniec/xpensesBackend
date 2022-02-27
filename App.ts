export {};
const express = require("express");

const expensesRoutes = require("./routes");

const app = express();
const port = 5001;

app.use("/", expensesRoutes);

app.listen(port, () => {
  console.log(`Server is up and running on port ${port}`);
});
