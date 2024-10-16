const Joi = require("joi");

const signupValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(5).max(50).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(50).required(),
  });

  // Perform validation
  const { error } = schema.validate(req.body);

  if (error) {
    // Return error response if validation fails
    return res.status(400).json({
      message: "Bad request",
      error: error.details[0].message, // Send the specific error message
    });
  }
  // If validation passes, proceed to the next middleware
  next();
};

const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(5).max(50).required(),
  });

  // Perform validation
  const { error } = schema.validate(req.body);

  if (error) {
    // Return error response if validation fails
    return res.status(400).json({
      message: "Bad request",
      error: error.details[0].message, // Send the specific error message
    });
  }
  // If validation passes, proceed to the next middleware
  next();
};

module.exports = {
  signupValidation,
  loginValidation,
};
