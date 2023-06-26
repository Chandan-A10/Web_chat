import React from 'react'
import { Card, Container, Image } from 'react-bootstrap'
import styles from './CurrChat.module.css'
import image from '../../assests/images/PP.jpeg'
import { PaperClipOutlined, SendOutlined, SmileOutlined } from '@ant-design/icons'
import { Button, Input } from 'antd'
import TextArea from 'antd/es/input/TextArea'
const CurrChat=()=> {
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
            <div className={styles.msg} style={{backgroundColor:'#00B1FE'}}> 
              &nbsp;&nbsp;&nbsp;&nbsp;This is a message
            </div>
            <Card style={{width:'102.5%',marginLeft:'-1.2%',backgroundColor:'white',height:'9%',borderTop:'none',borderLeft:'none',borderRight:'none'}}>
                <Card.Body>
                <Input prefix={<PaperClipOutlined />} suffix={<><SmileOutlined /><SendOutlined /></>} size='large' placeholder='Type a message'></Input>
                </Card.Body>
            </Card>
    </Container>
    </>
  )
}

export default CurrChat