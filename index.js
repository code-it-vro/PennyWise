const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
require("./Models/db");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const Authrouter = require("./Routes/AuthRouter");
const ProductRouter = require("./Routes/ProductRouter");
const ExpenseRouter = require("./Routes/ExpenseRouter");
const checkifAuthenticated = require("./Middlewares/Auth");

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use("/auth", Authrouter);
app.use('/products', ProductRouter)
app.use('/expenses', checkifAuthenticated, ExpenseRouter)

app.get("/test", (req, res) => {
  res.send("Your backend is good to go!");
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
