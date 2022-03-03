const express = require("express");

const expenseController = require("./expenseController");

const router = express.Router();

router.get("/", expenseController.getExpenses);
router.post("/", expenseController.createNewExpense);

module.exports = router;
