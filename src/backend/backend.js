import * as firebase from 'firebase/app'; // Firebase App (the core Firebase SDK) is always required and must be listed first
import 'firebase/firestore';
import { firebaseConfig } from '../firebase.config';

firebase.initializeApp(firebaseConfig);

const loadCharacters = async () => {
	const db = firebase.firestore();
	const snapshot = await db.collection('characters').get();
	const objs = [];
	snapshot.forEach((doc) => {
		objs.push(doc.data());
	});
	return objs;
};

export { loadCharacters };

// db.collection('cities')
// 	.where('capital', '==', true)
// 	.get()
// 	.then(function (querySnapshot) {
// 		querySnapshot.forEach(function (doc) {
// 			// doc.data() is never undefined for query doc snapshots
// 			console.log(doc.id, ' => ', doc.data());
// 		});
// 	})
// 	.catch(function (error) {
// 		console.log('Error getting documents: ', error);
// 	});
