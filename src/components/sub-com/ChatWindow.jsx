import React, { useEffect, useState } from 'react'
import styles from './ChatWindow.module.css'
import { GetChats } from '../../Database/GetChats'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'

const ChatWindow=({chatID})=>{
    console.log(chatID)
    const [chats, setchats] = useState(null)
    const Curruser=useSelector(state=>state.user)
    useEffect(()=>{
        const onSnapshotCallback=(newdata)=>{
            setchats(newdata)
        }
        const unsubscribe=GetChats(chatID,onSnapshotCallback)
    },[chatID])

    return (
        <>
        <Container className={styles.container}>
            {chats?chats.map((x)=>(
                <>
                {x.senderId!==Curruser?
                <>
                <div className={styles.main}>
                <br/>
                <br/>
                <div className={styles.sender} style={{backgroundColor:'#00B1FE'}}>
                    <p className={styles.text}>{x.text}</p>
                </div>
                </div>
                </>
                :
                <>
                <div className={styles.main} style={{justifyContent:'right'}}>
                <br/>
                <br/>
                <div className={styles.reciever} style={{minWidth:'20%',display:'flex',justifyContent:'çenter',alignItems:'center',backgroundColor:'#00B1FE',borderRadius: '10px 0 10px 10px'}}>
                    <p className={styles.text} style={{marginLeft:'10%',marginTop:'10%'}}>{x.text}</p>
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