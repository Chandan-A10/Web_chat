import React from 'react'
import { Form, Card, Container } from 'react-bootstrap'
import styles from './SideToolbar.module.css'
import { LogoutOutlined, SearchOutlined } from '@ant-design/icons'
import { Divider, Input } from 'antd'
import UserList from './UserList'
import { logout } from '../../firebase/firebase'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../../reducers/userSlice'
import { SetOffline } from '../../Database/SetOffline'
const SideToolbar=({data,setid})=> {
  const user=useSelector(state=>state.user)
  
  const dispatcher=useDispatch()
  const navigator=useNavigate()

  const logoutnow=()=>{
    SetOffline(user)
    logout()
    dispatcher(logoutUser())
    navigator('/')
  }

  return (
    <Container  className={styles.container} style={{width:'46%'}}>
        <Card style={{background:'transparent', border:'transparent'}} >
            <Card.Body>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <h3>Chats</h3>
                <LogoutOutlined onClick={logoutnow} style={{marginTop:'4%'}}/>
                </div>
               <Form >
                <Input placeholder='Search...' className={styles.search} suffix={<SearchOutlined />} size='large'></Input>
              </Form> 
            </Card.Body>
        </Card>
        <Divider style={{marginTop:'-0.5%',borderWidth:'2px',marginBottom:'-0.5%'}}/>
        <UserList data={data} setid={setid}></UserList>
    </Container>
  )
}

export default SideToolbar