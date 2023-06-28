import { addDoc } from "firebase/firestore"
import { ChatRoomCollection } from "../firebase/firebase"

export const CreateChatRoom=async(chatid)=>{
    const newroom= await addDoc(ChatRoomCollection,{
        chatID:chatid,
        chats:[]
    })
    console.log('Created Room')
}