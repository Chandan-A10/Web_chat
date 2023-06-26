import React from 'react'
import SideToolbar from './sub-com/SideToolbar'
import CurrChat from './sub-com/CurrChat'
import { Container } from 'react-bootstrap'
import styles from './ChatRoom.module.css'

const ChatRoomCmp=()=> {
  return (
    <div className={styles.container} style={{backgroundColor:'pink',height:'100vh'}}>
        <Container className={styles.sub_container} style={{backgroundColor:'#F3F3F3',height:'80vh',width:'80vw'}}>
        <SideToolbar></SideToolbar>
        <CurrChat></CurrChat>
        </Container>
    </div>
  )
}

export default ChatRoomCmp