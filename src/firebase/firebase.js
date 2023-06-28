// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'
import { GoogleLogin } from "../Database/GoogleLogin";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCJ0CSUPGULfJbpCcxfEn04Yz98ZpJhVDs",
    authDomain: "webchat-45466.firebaseapp.com",
    projectId: "webchat-45466",
    storageBucket: "webchat-45466.appspot.com",
    messagingSenderId: "650062979991",
    appId: "1:650062979991:web:8da8f0eea896a988bddad2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth(app)
export const db=getFirestore(app)
export const UserCollection=collection(db,'Users')
export const ChatRoomCollection=collection(db,'ChatRoom')

//get one record from table specific
// const special=doc(db,'Users/A0FveLRMCVmbSL0lUTep')
// const doca=await getDoc(special)
// console.log(doca.data())

// const newDoc= await addDoc(UserCollection,{
//     name:'Alpha',
//     date:Date.now()
// })
// // console.log(newDoc)
//  const data=query(collection(db,'Users'),where('name','==','ABC'))
//  const datadb=await getDocs(data)
//  datadb.forEach((x)=>console.log(x.data()))

export const register=async(email,password,name)=>{
    try{
        const res = await createUserWithEmailAndPassword(auth, email, password);
        updateProfile(res.user,{displayName:name}).then((x)=>console.log('Successfully updated name')).catch((err)=>console.log(err))
        return res
    }
    catch(err){
        console.log(err)
    }

}

export const GoogleAuth=async()=>{
    const provider = new GoogleAuthProvider();
    const user=await signInWithPopup(auth,provider)
    .then((x)=>{
      GoogleLogin(x.user.uid,x.user.displayName)
      return x;
    })
    .catch((err)=>{
      console.log(err)
    })
    return user
}

export const login=async(email,password)=>{
    try{
        const res=await signInWithEmailAndPassword(auth,email,password)
        console.log(res)
        return res
    }
    catch(error){
        alert(error)
        return
    }
}

export const logout=()=>{
    signOut(auth)
}

