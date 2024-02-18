const db = require('./firebaseSetup')
const { setDoc, doc, collection, where, query, getDocs } = require("firebase/firestore");

const addDocument = async (collectionName, data) => {
	try {
		return await setDoc(doc(db, collectionName, data.id), data);
	} catch (error) {
		return Promise.reject(error);
	}
};

const getDocByProperty = async (collectionName, objectProperty, valueToSearch) => {
	const dbCollection = collection(db, collectionName);

	try {
		const dbQuery = query(
			dbCollection,
			where(objectProperty, "==", valueToSearch)
		);
		const result = [];
		const querySnapshot = await getDocs(dbQuery);
		querySnapshot.forEach((doc) => {
			result.push(doc.data());
		});
		return result;
	} catch (error) {
		return Promise.reject(error);
	}
};

module.exports = {
	addDocument,
	getDocByProperty,
};
