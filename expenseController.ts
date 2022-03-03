const RequestType = require("express");
const ResponseType = require("express");

const getExpenses = (req: typeof RequestType, res: typeof ResponseType) => {
  res.send("Udało się odpalic getExpense z poziomu controllera");
};

const createNewExpense = (
  req: typeof RequestType,
  res: typeof ResponseType
) => {
  return res.send("Odpowiedż na post requesta");
};

exports.createNewExpense = createNewExpense;
exports.getExpenses = getExpenses;
