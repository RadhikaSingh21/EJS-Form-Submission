const express = require("express");
const userController = require("../controller/userController.js");

const router = express.Router();

// Define routes
router.get("/", userController.renderForm);
router.post("/submit", userController.submitForm);

module.exports = router;
