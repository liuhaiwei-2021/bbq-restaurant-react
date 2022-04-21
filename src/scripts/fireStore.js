// NPM package
import { collection, getDocs, doc, getDoc } from "firebase/firestore";

// Project files
import { fireStore } from "./firebase";

// Methods

export async function readDocument(path, id) {
	const payload = { data: undefined, error: false, loading: true };

	try {
		const documentPath = doc(fireStore, path, id);
		const document = await getDoc(documentPath);

		payload.data = document.data();
		payload.loading = false;
	} catch (error) {
		payload.error = true;
		payload.data = error;
		payload.loading = false;
	}

	return payload;
}

export async function readCollection(path) {
	let payload = { data: undefined, error: false, loading: true };

	try {
		const collectionPath = collection(fireStore, path);
		const snapshot = await getDocs(collectionPath);
		const documents = snapshot.docs.map((item) => {
			return { id: item.id, ...item.data() };
		});

		payload = { data: documents, error: false, loading: false };
	} catch (error) {
		payload = { data: error, error: true, loading: false };
	}

	return payload;
}
