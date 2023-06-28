import React, { useState } from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import styles from './CurrChat.module.css'
import image from '../../assests/images/PP.jpeg'
import { PaperClipOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons'
import { Input } from 'antd'

import ChatWindow from './ChatWindow'
import { UpdateChats } from '../../Database/UpdateChat'
import { useSelector } from 'react-redux'
import { GetASingleUser } from '../../Database/GetASingleUser'


const CurrChat=({chatID,recieverId})=> {
  const [value, setvalue] = useState('')
  const [recieverName, setrecieverName] = useState('')
  let chat=false
  const userid=useSelector(state=>state.user)

  if(chatID){
    chat=true
    const user=GetASingleUser(recieverId)
    user.then((x)=>{
      setrecieverName(x)
    })
  }
  const handleValue=(e)=>{
    setvalue(e.target.value)
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
  return (
    <>
    <Container className={styles.container} style={{backgroundColor:'#F8F9F8'}}>
            {recieverName!=='' && 
            <Card style={{width:'102.5%',marginLeft:'-1.2%',backgroundColor:'white',height:'9%',borderTop:'none',borderLeft:'none',borderRight:'none'}}>
                <Card.Body style={{display:'flex'}}>
                    <Image src={image} className={styles.image}></Image>
                    <div style={{marginTop:'-1%'}}>
                    <p className={styles.name}>{recieverName}</p>
                    <p className={styles.lastmsg}>online</p>
                    </div>
                </Card.Body>
            </Card>
            }
            {chat && <ChatWindow chatID={chatID}/>}
            <Card style={{width:'102.5%',marginLeft:'-1.2%',backgroundColor:'white',height:'9%',borderTop:'none',borderLeft:'none',borderRight:'none'}}>
                <Card.Body>
                <Input value={value} onChange={handleValue} prefix={<PaperClipOutlined style={{cursor:'pointer'}} />} suffix={<><SmileOutlined style={{cursor:'pointer'}}/><SendOutlined onClick={handleClick} /></>} size='large' placeholder='Type a message'></Input>
                </Card.Body>
            </Card>
    </Container>
    </>
  )
}

export default CurrChat