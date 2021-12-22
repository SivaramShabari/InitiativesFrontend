import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyAHt1mB042gB_gLGW951hdSSXOr6bNyeWw",
	authDomain: "initiatives-mr-cooper.firebaseapp.com",
	projectId: "initiatives-mr-cooper",
	storageBucket: "initiatives-mr-cooper.appspot.com",
	messagingSenderId: "784853065913",
	appId: "1:784853065913:web:fa2c1d5ed2a6fe38b33b68",
	measurementId: "G-KQWMC110K3",
};

initializeApp(firebaseConfig);

const env = {
	url: "https://initiatives-mr-cooper.herokuapp.com",
};

export default env;
