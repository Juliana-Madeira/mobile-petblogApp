import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAvAl0QL1Xqc7I5coRcMVqMBxekHZ0yltc",
    authDomain: "petblogapp.firebaseapp.com",
    databaseURL: "https://petblogapp-default-rtdb.firebaseio.com",
    projectId: "petblogapp",
    storageBucket: "petblogapp.appspot.com",
    messagingSenderId: "931142782390",
    appId: "1:931142782390:web:7839cba5aed8b6337a4517",
    measurementId: "G-2NTPV21QBY"
  };

 
if(!firebase.apps.length){
    //abrir minha conexao
    firebase.initializeApp(firebaseConfig);
}

export default firebase;