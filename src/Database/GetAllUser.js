import { getDocs, onSnapshot, query } from "firebase/firestore"
import { UserCollection } from "../firebase/firebase"

export const getAllUser=async(onSnapshotCallback)=>{
    const qry=query(UserCollection)
    const data=await getDocs(qry)
    const userDetails=[]
    data.forEach(x=>{
        userDetails.push(x.data())
        onSnapshot(x.ref,(snap)=>{
            const updateUserDetails=snap.data()
            const index=userDetails.findIndex((user)=>user.userID===updateUserDetails.userID)
            if(index!==-1){
                userDetails[index]=updateUserDetails
                onSnapshotCallback(userDetails)
            }
        })
    })
    console.log(userDetails)
    return userDetails
}
