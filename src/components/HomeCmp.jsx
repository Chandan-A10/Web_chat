import React from 'react'
import styles from './Home.module.css' 
import web from '../assests/images/web.svg'
import { Container } from 'react-bootstrap'
import { Divider } from 'antd'
import LoginCmp from './LoginCmp'
const HomeCmp=()=> {
  return (
    <>
    <div className={styles.container} style={{height:'100vh'}}>
        <Container className={styles.sub_container} style={{height:'80vh',width:'80vw'}}>
        <Container className={styles.left_container}>
          <img src={web} className={styles.img}></img>
        </Container>
        <Container>
          <LoginCmp/>
        </Container>
        </Container>
    </div>
    </>
  )
}

export default HomeCmp