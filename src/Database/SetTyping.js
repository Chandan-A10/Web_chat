import { getDocs, query, setDoc,where } from "firebase/firestore"
import { UserCollection  } from "../firebase/firebase"


export const SetTypingTrue=async(userid)=>{

    const qry=query(UserCollection,where('userID','==',userid))
    const users=await getDocs(qry)

    users.forEach((e)=>{
        if(e.data().userID===userid){
            setDoc(e.ref,{ typing:true },{merge:true})
        }
    })
    console.log('Updated typing')
}

export const SetTypingFalse=async(userid)=>{

    const qry=query(UserCollection,where('userID','==',userid))
    const users=await getDocs(qry)

    users.forEach((e)=>{
        if(e.data().userID===userid){
            setDoc(e.ref,{ typing:false },{merge:true})
        }
    })
    console.log('Updated typing')
}