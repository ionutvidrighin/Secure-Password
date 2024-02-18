const bcrypt = require("bcryptjs");
const { addDocument, getDocByProperty } = require("../firebaseAPI");

const createNewAccount = async (req, res) => {
	const payload = {
		userName: req.body.userName,
		password: req.body.password,
		id: '3349538sdffs58345'
	};

	try {
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(req.body.password, salt);

		Object.assign(payload, {
			password: hashedPassword,
		});

		const response = await addDocument("USERS", payload);
		console.log("response", response);
		res.status(201).json({ message: "User account created successfully" });
	} catch (error) {
		console.log("error", error);
		res
			.status(500)
			.json({ message: "User account could not be created", error });
	}
};

module.exports = createNewAccount;
