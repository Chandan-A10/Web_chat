import { addDoc, getDocs, query, where } from "firebase/firestore"
import { ChatRoomCollection } from "../firebase/firebase"

export const CreateChatRoom=async(chatid)=>{
    const qry=query(ChatRoomCollection,where('chatID','==',chatid))
    const chatroom=await getDocs(qry)
    if(!chatroom.empty){
        return
    }
    const newroom= await addDoc(ChatRoomCollection,{
        chatID:chatid,
        chats:[]
    })
    console.log('Created Room')
    return
}