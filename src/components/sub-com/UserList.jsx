import React from 'react'
import styles from './UserList.module.css'
import { Card, Image } from 'react-bootstrap'
import image from '../../assests/images/PP.jpeg'
import { useSelector } from 'react-redux'

const UserList=({data,setid})=> {
    const Curruser=useSelector(state=>state.user)
    console.log(data)
    const setchatId=(ID)=>{
        setid(ID)
    }
    return (
    <>
    <div className={styles.main} style={{maxHeight:'83%',overflow:'scroll'}}>
        {data?
        data.map((user)=>{
            return(
            <>
            {user.userID!==Curruser &&
            <Card className={styles.card} onClick={()=>setchatId(user.userID)} style={{backgroundColor:'transparent',border:'none'}}>
                <Card.Body style={{display:'flex',height:'80px'}}>
                    <div style={{display:'flex',flexDirection:"column"}}>
                        <Image src={image} className={styles.image}></Image>
                    </div>
                    <div>
                        <p className={styles.name} style={{width:"150px",height:"20px",overflow:'hidden',whiteSpace:'nowrap'}}>{user.name}</p>
                        <p className={styles.lastmsg} style={{width:"150px",height:"20px",overflow:'hidden',whiteSpace:'nowrap'}}>History message</p>
                    </div>
                    <p className={styles.time}>14.20&nbsp;PM</p>
                </Card.Body>
            </Card>
            }
            </>
            )
        })
        :
        <h3>No data found</h3>}
        </div>
    </>
  )
}

export default UserList