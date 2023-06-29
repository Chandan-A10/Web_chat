import React, { useEffect, useState } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import styles from './CurrChat.module.css'
import image from '../../assests/images/PP.jpeg'
import { ClearOutlined,PaperClipOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons'
import { Button, Input, Tooltip } from 'antd'

import ChatWindow from './ChatWindow'
import { UpdateChats } from '../../Database/UpdateChat'
import { useSelector } from 'react-redux'
import { GetASingleUser } from '../../Database/GetASingleUser'
import { onSnapshot, query, where } from 'firebase/firestore'
import { ChatRoomCollection } from '../../firebase/firebase'
import { SetTypinginChatRoomFalse, SetTypinginChatRoomTrue } from '../../Database/TypingInChatRoom'
import { DeleteChats } from '../../Database/DeleteChats'


const CurrChat=({chatID,recieverId})=> {
  const [value, setvalue] = useState('')
  const [typing, setTyping] = useState(null)

  const [recieverName, setrecieverName] = useState('')
  let chat=false  
  const userid=useSelector(state=>state.user)
  if(chatID){
    console.log('q')
    chat=true
    const user=GetASingleUser(recieverId)
    user.then((x)=>{
      setrecieverName(x)
    })
  }
  useEffect(()=>{
    const qry = query(ChatRoomCollection, where("chatID", "==", chatID));
    const unsubscribe = onSnapshot(qry, (snapshot) => {
        let typingStatus = false;
        snapshot.forEach((doc) => {
          typingStatus = doc.data()[userid];
        });
        setTyping(typingStatus);
      });
      return () => {
            unsubscribe();
      };
  },[chatID,userid])

  var timer;
  const handleValue=(e)=>{
    SetTypinginChatRoomTrue(chatID,recieverId)
    clearTimeout(timer)
    timer=setTimeout(() => {
      SetTypinginChatRoomFalse(chatID,recieverId)
    }, 2000);
    setvalue(e.target.value)
  }
  const keydown=(e)=>{
    if(e.key==='Enter'){
      handleClick(e)
    }
  }
  const handleClick=(e)=>{
    console.log(value)
    const date=new Date()
    let obj={
      senderId:userid,
      recieverid:recieverId,
      time:date,
      status:false,
      text:value
    }
    setvalue('')
    UpdateChats(chatID,obj)
  }
  const handleClear=()=>{
    console.log('sdjkhjk')
    DeleteChats(chatID,userid)
  }
  return (
    <>
    <Container className={styles.container} style={{backgroundColor:'#F8F9F8'}}>
            {recieverName!=='' && 
            <Card style={{width:'102.5%',marginLeft:'-1.2%',backgroundColor:'white',height:'9%',borderTop:'none',borderLeft:'none',borderRight:'none'}}>
                <Card.Body style={{display:'flex'}}>
                    <Image src={image} className={styles.image}></Image>
                    <div style={{marginTop:'-1%'}}>
                    <p className={styles.name}>{recieverName}</p>
                    <p className={styles.lastmsg} style={typing?{color:'green'}:{color:'grey'}}>{typing?'typing...':'Not typing...'}</p>
                    </div>
                    <Tooltip title='Clear Chats' >
                    <ClearOutlined className={styles.clear} style={{marginLeft:'70%'}} onClick={handleClear}/>
                    </Tooltip>
                
                </Card.Body>
            </Card>
            }
            {chat && <ChatWindow chatID={chatID}/>}
            <Card style={{width:'102.5%',marginLeft:'-1.2%',backgroundColor:'white',height:'9%',borderTop:'none',borderLeft:'none',borderRight:'none'}}>
                <Card.Body>
                <Input onKeyDown={keydown} value={value} onChange={handleValue} prefix={<PaperClipOutlined style={{cursor:'pointer'}} />} suffix={<><SmileOutlined style={{cursor:'pointer'}}/><SendOutlined onClick={handleClick} /></>} size='large' placeholder='Type a message'></Input>
                </Card.Body>
            </Card>
    </Container>
    </>
  )
}

export default CurrChat