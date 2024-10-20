const { fetchExpenses, addExpenses, deletExpenses } = require("../Controllers/ExpenseContorller");

const router = require("express").Router();



router.get('/', fetchExpenses)
router.post('/', addExpenses)
router.delete('/:expenseId', deletExpenses)

module.exports = router