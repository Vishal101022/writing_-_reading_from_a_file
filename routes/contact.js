const express = require("express");
const router = express.Router();
const path = require("path");
const contactController = require("../controllers/contact");

router.get("/contactus", contactController.getContact);

module.exports = router;