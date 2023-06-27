import React, { useRef, useState } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import styles from './CurrChat.module.css'
import image from '../../assests/images/PP.jpeg'
import { PaperClipOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import ChatWindow from './ChatWindow'
import { UpdateChats } from '../../Database/UpdateChat'
import { useSelector } from 'react-redux'


const CurrChat=({chatID})=> {

  const inputRef=useRef()
  let chat=false
  const userid=useSelector(state=>state.user)
  if(chatID){
    chat=true
  }
  const handleClick=(e)=>{
    let obj={
      senderId:userid,
      recieverid:'ashdbas',
      time:new Date(),
      status:false,
      text:'hbhhjh'
    }
    UpdateChats(chatID,obj)
  }
  return (
    <>
    <Container className={styles.container} style={{backgroundColor:'#F8F9F8'}}>
            <Card style={{width:'102.5%',marginLeft:'-1.2%',backgroundColor:'white',height:'9%',borderTop:'none',borderLeft:'none',borderRight:'none'}}>
                <Card.Body style={{display:'flex'}}>
                    <Image src={image} className={styles.image}></Image>
                    <div style={{marginTop:'-1%'}}>
                    <p className={styles.name}>Shelina</p>
                    <p className={styles.lastmsg}>online</p>
                    </div>
                </Card.Body>
            </Card>
            {chat && <ChatWindow chatID={chatID}/>}
            <Card style={{width:'102.5%',marginLeft:'-1.2%',backgroundColor:'white',height:'9%',borderTop:'none',borderLeft:'none',borderRight:'none'}}>
                <Card.Body>
                <Input ref={inputRef} prefix={<PaperClipOutlined />} suffix={<><SmileOutlined /><SendOutlined onClick={handleClick} /></>} size='large' placeholder='Type a message'></Input>
                </Card.Body>
            </Card>
    </Container>
    </>
  )
}

export default CurrChat