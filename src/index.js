import './style.css';
import * as firebase from 'firebase/app'; // Firebase App (the core Firebase SDK) is always required and must be listed first
import 'firebase/firestore';
import { firebaseConfig } from './firebase.config';
import { render } from './setup';

firebase.initializeApp(firebaseConfig);
render();
