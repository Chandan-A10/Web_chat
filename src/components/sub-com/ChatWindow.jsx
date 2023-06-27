import React, { useEffect, useState } from 'react'
import styles from './ChatWindow.module.css'
import { GetChats } from '../../Database/GetChats'

const ChatWindow=({chatID})=>{
    const [chats, setchats] = useState(null)
    useEffect(()=>{
        const chats=GetChats('123456')
        chats.then((res)=>{
            setchats(res)
        })                 
        .catch((err)=>{
            console.log(err)
        })
    },[chatID])

    return (
        <>

        <div className={styles.msg} style={{backgroundColor:'#00B1FE'}}> 
              {chats?chats.map((x)=>{
                return ( <><p>{x.text}</p></> )
              }):
              <h3>No data</h3>
            }
        </div>
        </>
    )
}

export default ChatWindow