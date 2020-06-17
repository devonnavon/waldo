import './style.css';

import * as firebase from 'firebase/app'; // Firebase App (the core Firebase SDK) is always required and must be listed first

import 'firebase/firestore';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCbM1-Lz_dXCglGcgwfem5tmXu4a4CKXn0',
	authDomain: 'waldo-82cf0.firebaseapp.com',
	databaseURL: 'https://waldo-82cf0.firebaseio.com',
	projectId: 'waldo-82cf0',
	storageBucket: 'waldo-82cf0.appspot.com',
	messagingSenderId: '57558046503',
	appId: '1:57558046503:web:1399aa86cbc7fc2ee23b02',
};

// // Initialize Firebase
firebase.initializeApp(firebaseConfig);

function saveMessage(nameText, messageText) {
	// Add a new message entry to the database.
	return firebase
		.firestore()
		.collection('messages')
		.add({
			name: nameText,
			text: messageText,
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		})
		.catch(function (error) {
			console.error('Error writing new message to database', error);
		});
}

function loadMessages() {
	// Create the query to load the last 12 messages and listen for new ones.
	var query = firebase
		.firestore()
		.collection('messages')
		.orderBy('timestamp', 'desc')
		.limit(12);

	// Start listening to the query.
	query.onSnapshot((snapshot) => {
		snapshot.docChanges().forEach((change) => {
			if (change.type === 'removed') {
				deleteMessage(change.doc.id);
			} else {
				var message = change.doc.data();
				displayMessage(
					change.doc.id,
					message.timestamp,
					message.name,
					message.text,
					message.profilePicUrl,
					message.imageUrl
				);
			}
		});
	});
}

const x = document.createElement('h1');
x.innerHTML = 'hello sir';
document.body.appendChild(x);
