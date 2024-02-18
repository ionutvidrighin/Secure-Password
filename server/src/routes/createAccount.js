const express = require("express");
const router = express.Router();
const createAccount = require('../controllers/createAccount')

router.route("/create-account").post(createAccount);

module.exports = router;