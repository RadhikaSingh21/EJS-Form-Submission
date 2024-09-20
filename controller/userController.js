const User = require("../models/user.js");

exports.renderForm = (req, res) => {
  res.render("form");
};

exports.submitForm = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Store data in the database
    await User.create({ name, email, message });

    res.render("success", { name, email, message });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send("An error occurred while saving your data.");
  }
};
