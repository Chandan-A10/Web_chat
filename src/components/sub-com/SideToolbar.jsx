import React from 'react'
import { Form, Card, Container, FormControl } from 'react-bootstrap'
import styles from './SideToolbar.module.css'
import { UnorderedListOutlined, SearchOutlined } from '@ant-design/icons'
import { Button, Divider, Input } from 'antd'
import UserList from './UserList'

const SideToolbar=()=> {
  return (
    <Container  className={styles.container} style={{width:'46%'}}>
        <Card style={{background:'transparent', border:'transparent'}} >
            <Card.Body>
                <div style={{display:'flex',justifyContent:'space-between'}}>
                <h3>Chats</h3>
                <UnorderedListOutlined style={{marginTop:'4%'}}/>
                </div>
               <Form >
                <Input placeholder='Search...' className={styles.search} suffix={<SearchOutlined />} size='large'></Input>
              </Form> 
            </Card.Body>
        </Card>
        <Divider style={{marginTop:'-0.5%',borderWidth:'2px',marginBottom:'-0.5%'}}/>
        <UserList></UserList>
    </Container>
  )
}

export default SideToolbar