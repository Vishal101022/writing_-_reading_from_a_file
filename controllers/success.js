const path = require("path");

exports.getsuccess = (req, res, next) => {
  res.send(`<h3>Form successfuly filled</h3>`);
};