import React from 'react'
import styles from './UserList.module.css'
import { Card, Image } from 'react-bootstrap'
import image from '../../assests/images/PP.jpeg'
import { Divider } from 'antd'

const UserList=()=> {
  return (
    <>
    <div className={styles.main} style={{maxHeight:'83%',overflow:'scroll'}}>
    <Card className={styles.card} style={{backgroundColor:'transparent',border:'none'}}>
        <Card.Body style={{display:'flex',height:'80px'}}>
            <Image src={image} className={styles.image}></Image>
            <div>
            <p className={styles.name}>Shelina</p>
            <p className={styles.lastmsg}>dkfsdlmsdas</p>
            </div>
            <p className={styles.time}>14.20&nbsp;PM</p>
        </Card.Body>
        </Card>
        <Card className={styles.card} style={{backgroundColor:'transparent',border:'none'}}>
        <Card.Body style={{display:'flex',height:'80px'}}>
            <Image src={image} className={styles.image}></Image>
            <div>
            <p className={styles.name}>Shelina</p>
            <p className={styles.lastmsg}>dkfsdlmsdas</p>
            </div>
            <p className={styles.time}>14.20&nbsp;PM</p>
        </Card.Body>
        </Card>
        <Card className={styles.card} style={{backgroundColor:'transparent',border:'none'}}>
        <Card.Body style={{display:'flex',height:'80px'}}>
            <Image src={image} className={styles.image}></Image>
            <div>
            <p className={styles.name}>Shelina</p>
            <p className={styles.lastmsg}>dkfsdlmsdas</p>
            </div>
            <p className={styles.time}>14.20&nbsp;PM</p>
        </Card.Body>
    </Card>
    <Card className={styles.card} style={{backgroundColor:'transparent',border:'none'}}>
        <Card.Body style={{display:'flex',height:'80px'}}>
            <Image src={image} className={styles.image}></Image>
            <div>
            <p className={styles.name}>Shelina</p>
            <p className={styles.lastmsg}>dkfsdlmsdas</p>
            </div>
            <p className={styles.time}>14.20&nbsp;PM</p>
        </Card.Body>
        </Card>
        <Card className={styles.card} style={{backgroundColor:'transparent',border:'none'}}>
        <Card.Body style={{display:'flex',height:'80px'}}>
            <Image src={image} className={styles.image}></Image>
            <div>
            <p className={styles.name}>Shelina</p>
            <p className={styles.lastmsg}>dkfsdlmsdas</p>
            </div>
            <p className={styles.time}>14.20&nbsp;PM</p>
        </Card.Body>
        </Card>
        <Card className={styles.card} style={{backgroundColor:'transparent',border:'none'}}>
        <Card.Body style={{display:'flex',height:'80px'}}>
            <Image src={image} className={styles.image}></Image>
            <div>
            <p className={styles.name}>Shelina</p>
            <p className={styles.lastmsg}>dkfsdlmsdas</p>
            </div>
            <p className={styles.time}>14.20&nbsp;PM</p>
        </Card.Body>
        </Card>
        <Card className={styles.card} style={{backgroundColor:'transparent',border:'none'}}>
        <Card.Body style={{display:'flex',height:'80px'}}>
            <Image src={image} className={styles.image}></Image>
            <div>
            <p className={styles.name}>Shelina</p>
            <p className={styles.lastmsg}>dkfsdlmsdas</p>
            </div>
            <p className={styles.time}>14.20&nbsp;PM</p>
        </Card.Body>
        </Card>
        <Card className={styles.card} style={{backgroundColor:'transparent',border:'none'}}>
        <Card.Body style={{display:'flex',height:'80px'}}>
            <Image src={image} className={styles.image}></Image>
            <div>
            <p className={styles.name}>Shelina</p>
            <p className={styles.lastmsg}>dkfsdlmsdas</p>
            </div>
            <p className={styles.time}>14.20&nbsp;PM</p>
        </Card.Body>
        </Card>
        <Card className={styles.card} style={{backgroundColor:'transparent',border:'none'}}>
        <Card.Body style={{display:'flex',height:'80px'}}>
            <Image src={image} className={styles.image}></Image>
            <div>
            <p className={styles.name}>Shelina</p>
            <p className={styles.lastmsg}>dkfsdlmsdas</p>
            </div>
            <p className={styles.time}>14.20&nbsp;PM</p>
        </Card.Body>
        </Card>
        </div>
    </>
  )
}

export default UserList