const express = require("express");
const router = express.Router();
const successController = require("../controllers/success");

router.post("/success",successController.getsuccess);


module.exports = router;