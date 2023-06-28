import { addDoc, getDocs, query, where } from "firebase/firestore"
import { ChatRoomCollection } from "../firebase/firebase"

export const CreateChatRoom=async(chatid)=>{
    const qry=query(ChatRoomCollection,where('chatID','==',chatid))
    const data=await getDocs(qry)
    if(data.empty){
        await addDoc(ChatRoomCollection,{
            chatID:chatid,
            chats:[]
        })
        console.log('Room Created')
    }
}