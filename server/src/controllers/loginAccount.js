const bcrypt = require("bcryptjs");
const { getDocByProperty } = require("../firebaseAPI");

const logUserIn = async (req, res) => {
  const userName = req.body.userName
  const userPassword = req.body.password
  const property = "userName"
  try {
    const response = await getDocByProperty("USERS", property, userName);
    //console.log(response)

    const hashedPassword = response[0].password;
    const passwordMatched = await bcrypt.compare(
      userPassword,
      hashedPassword
    );

    if (passwordMatched) {
      res.status(200).json({ message: "Login success!" });
    } else { 
      res.status(401).json({ message: "Incorrect Password!" });
    }
  } catch (error) {
    console.log(error)
    res.status(500).json({message: "Login error!"})
  }
}

module.exports = logUserIn;