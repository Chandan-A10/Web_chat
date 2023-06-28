import React, { useEffect, useState } from 'react'
import styles from './ChatWindow.module.css'
import { GetChats } from '../../Database/GetChats'
import { CreateChatRoom } from '../../Database/CreateChatroom'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ChatWindow=({chatID})=>{
    const [chats, setchats] = useState(null)
    const Curruser=useSelector(state=>state.user)
    useEffect(()=>{
        const chats=GetChats(chatID)
        chats.then((res)=>{
            console.log(res)
            if(res){
                setchats(res)
            }
            else{
                CreateChatRoom(chatID)
                setchats([])
            }
        })                 
        .catch((err)=>{
            console.log(err)
        })
    },[chatID])

    return (
        <>
        <Container className={styles.container}>
            {chats?chats.map((x)=>(
                <>
                {console.log(x.senderID,'Hell')}
                {x.senderId!==Curruser?
                <>
                <div className={styles.left}>
                <br/>
                <br/>
                <div className={styles.msg} style={{backgroundColor:'#00B1FE'}}>
                    <p className={styles.text}>{x.text}</p>
                </div>
                </div>
                </>
                :
                <>
                <div className={styles.right}>
                <br/>
                <br/>
                <div className={styles.sender} style={{backgroundColor:'#00B1FE'}}>
                    <p className={styles.text}>{x.text}</p>
                </div>
                </div>
                </>
                }
                </>
            ))
            :
            <></>
        }
        </Container>
        </>
    )
}

export default ChatWindow