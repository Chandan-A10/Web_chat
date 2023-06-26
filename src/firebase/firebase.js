// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signOut } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDyeqH_o2JldgJXbU8IXnnkodXRs_HRsuc",
    authDomain: "react-auth-c8275.firebaseapp.com",
    projectId: "react-auth-c8275",
    storageBucket: "react-auth-c8275.appspot.com",
    messagingSenderId: "811948791624",
    appId: "1:811948791624:web:4b7d71c640883dc4c5857d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)

export const register=async(email,password)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        console.log(res)
        return res
    }
    catch(err){
        console.log(err)
    }

}
export const logout=()=>{
    signOut(auth)
}