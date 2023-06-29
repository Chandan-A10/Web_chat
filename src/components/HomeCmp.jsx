import React from 'react'
import styles from './Home.module.css' 
import web from '../assests/images/web.svg'
import { Container } from 'react-bootstrap'
import LoginCmp from './LoginCmp'
import { useSearchParams } from 'react-router-dom'
import SignUpCmp from './SignUpCmp'
const HomeCmp=React.memo(()=> {
  const [search]=useSearchParams()
  const status=search.get('status')
  return (
    <>
    <div className={styles.container} style={{height:'100vh'}}>
        <Container className={styles.sub_container} style={{height:'80vh',width:'80vw'}}>
        <Container className={styles.left_container}>
          <img alt='mobile' src={web} className={styles.img}></img>
        </Container>
        <Container>
          {(status===null || status==='login') && <LoginCmp/>}
          {status==='signup' && <SignUpCmp/>}
        </Container>
        </Container>
    </div>
    </>
  )
})

export default HomeCmp