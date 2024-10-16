const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/contactus", (req, res, next) => {
    res.sendFile(path.join(__dirname, "..", "views", "contact.html"));
});

module.exports = router;