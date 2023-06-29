import { addDoc, getDocs, query, where } from "firebase/firestore"
import { UserCollection } from "../firebase/firebase"

export const GoogleLogin=async(userid,name)=>{
    const qry=query(UserCollection,where('userID','==',userid))
    const user=await getDocs(qry)
    if(!user.empty){
        return
    }
    const newDoc= await addDoc(UserCollection,{
        userID:userid,
        name:name,
        online:true,
    })
    console.log('User Added' ,newDoc)
}