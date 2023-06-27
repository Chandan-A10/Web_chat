import { getDocs, query } from "firebase/firestore"
import { UserCollection } from "../firebase/firebase"

export const getAllUser=async()=>{
    const qry=query(UserCollection)
    const data=await getDocs(qry)
    const userDetails=[]
    data.forEach(x=>{
        userDetails.push(x.data())
    })
    return userDetails
}