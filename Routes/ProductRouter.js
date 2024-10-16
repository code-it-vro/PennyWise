const checkifAuthenticated = require("../Middlewares/Auth");

const router = require("express").Router();

router.get("/", checkifAuthenticated, (req, res) => {
  res.status(200).json([
    {
      name: "Product 1",
      price: 100,
    },
    {
      name: "Product 2",
      price: 200,
    },
  ]);
});

module.exports = router;
