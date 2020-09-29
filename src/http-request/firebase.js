
// const admin = require('firebase/app');
// const serviceAccount = require('../assets/keyfiles.json');


// admin.initializeApp(serviceAccount)


// const db = admin.firestore()

// module.exports = {
//   db,
// }

import firebase from 'firebase';
import 'firebase/firestore';
import serviceAccount from '../assets/keyfiles.json';

firebase.initializeApp(serviceAccount)

const db = firebase.firestore()

export {
  db
}