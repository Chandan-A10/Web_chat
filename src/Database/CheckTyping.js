import { getDocs, onSnapshot, query, where } from "firebase/firestore"
import { UserCollection } from "../firebase/firebase"

export const GetChats=async(recieverid,onSnapshotCallback)=>{
    const qry=query(UserCollection,where('userID','==',recieverid))
    const user=await getDocs(qry)
    let typeStatus;
    user.forEach((e)=>{

        typeStatus=e.data().typing
        onSnapshot(e.ref,(docsnapshot)=>{
            if(docsnapshot.exists()){
                const newstatus=docsnapshot.data().typing
                if( newstatus!==typeStatus){
                    typeStatus=newstatus
                    onSnapshotCallback(newstatus)
                    return;
                }
            }
        })
    })
    return typeStatus;
}