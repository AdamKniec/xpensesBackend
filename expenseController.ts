const RequestType = require("express");
const ResponseType = require("express");
const NextType = require("express");

const getExpenses = (
  req: typeof RequestType,
  res: typeof ResponseType,
  next: typeof NextType
) => {
  res.send("Udało się odpalic getExpense z poziomu controllera");
};

exports.getExpenses = getExpenses;
