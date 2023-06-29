import React, { useEffect, useState } from 'react'
import styles from './ChatWindow.module.css'
import { GetChats } from '../../Database/GetChats'
import { Container } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { formatDate } from '../../firebase/Datehandler'
import { Divider } from 'antd'

const ChatWindow=({chatID})=>{
    const [date, setdate] = useState({today:null,yestarday:null})
    const [print, setprint] = useState()
    console.log(chatID)
    const [chats, setchats] = useState(null)
    const Curruser=useSelector(state=>state.user)
    useEffect(()=>{
        console.log('abc')
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
                {x[Curruser]?<></>:
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
                    {console.log(formatDate(x.time))}
                </div>
                </div>
                </>
                }
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