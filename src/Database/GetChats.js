import { getDocs, query, where } from "firebase/firestore"
import { ChatRoomCollection, db } from "../firebase/firebase"


export const GetChats=async(chatid)=>{
    const qry=query(ChatRoomCollection,where('chatID','==',chatid))
    const chats=await getDocs(qry)
    let chatdata;
    chats.forEach((e)=>{
        chatdata=e?.data().chats
    })
    return chatdata;
}