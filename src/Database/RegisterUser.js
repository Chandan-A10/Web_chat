import { addDoc } from "firebase/firestore"
import { UserCollection } from "../firebase/firebase"

export const registerUser=async(userid,name)=>{
    const newDoc= await addDoc(UserCollection,{
        userID:userid,
        name:name
    })
    return newDoc
}