const express = require("express");
const router = express.Router();
const loginAccount = require("../controllers/loginAccount");

router.route("/login-account").post(loginAccount);

module.exports = router;
