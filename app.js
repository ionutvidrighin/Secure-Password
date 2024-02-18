const createUserName = document.querySelector('.create-username')
const createPassword = document.querySelector('.create-password')
const createAccountBtn = document.querySelector('.create-submit')

const loginUserName = document.querySelector(".login-username");
const loginPassword = document.querySelector(".login-password");
const loginAccountBtn = document.querySelector('.login-submit')

const storeNewUser = async () => { 
  try {
    const call = await fetch("http://localhost:8080/create-account", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userName: createUserName.value,
				password: createPassword.value,
			}),
		});
		const response = await call.json();

		console.log("response", response);
  } catch (error) {
    console.log('error', error)
  }
}

const loginNewUser = async () => {
	try {
		const call = await fetch("http://localhost:8080/login-account", {
			method: "POST",
			headers: {
				Accept: "application/json",
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				userName: loginUserName.value,
				password: loginPassword.value,
			}),
		});
		const response = await call.json();

		console.log("response", response);
	} catch (error) {
		console.log("error", error);
	}
};


createAccountBtn.addEventListener("click", () => {
	storeNewUser();
});

loginAccountBtn.addEventListener("click", () => {
	loginNewUser();
});