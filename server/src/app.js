const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())

const createAccountRoute = require('./routes/createAccount')
app.use(createAccountRoute);

const loginAccountRoute = require("./routes/loginAccount");
app.use(loginAccountRoute);


module.exports = app