const express = require("express");
const router = express.Router();

router.post("/success", (req, res, next) => {
    res.send(`<h3>Form successfuly filled</h3>`);
});


module.exports = router;