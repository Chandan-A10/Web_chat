import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { auth, login, register, GoogleAuth } from '../firebase/firebase'
import styles from './Login.module.css'
import { Divider } from 'antd'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../reducers/userSlice'

const LoginCmp=()=> {
  const emailRef=useRef()
  const passRef=useRef()
  const [error, seterror] = useState(null)
  const [loading, setLoading] = useState(false)
  const dispatchor=useDispatch()
  const navigate=useNavigate()
  const Curruser=useSelector(state=>state.user)

  const signInWithGoogle = async() => {
    const user=await GoogleAuth()
    dispatchor(setUser(user.user.uid))
    navigate('/chatroom')
  }

  const handleSubmit=async(e)=>{
    e.preventDefault()
      if(emailRef.current.value==='' || passRef.current.value===''){
        seterror('All Fields are Required')
        return
      }
      setLoading(true)
      const user= await login(emailRef.current.value,passRef.current.value)
      setLoading(false)
      if(user){
        dispatchor(setUser(user.user.uid))
        navigate('/chatroom')
      }
  }
    return (
    <>
    <Container className={styles.container}>
      <Card className={styles.form}>
          <Card.Body>
              <h2 className="text-center mb-4" style={{fontFamily:'Arial'}}>Login </h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form className={styles.sub_form} onSubmit={handleSubmit}>
                  <Form.Group id="email">
                      <Form.Label>Email :</Form.Label>
                      <Form.Control type="email" ref={emailRef}  required />
                  </Form.Group>
                  <br></br>
                  <Form.Group id="password">
                      <Form.Label>Password :</Form.Label>
                      <Form.Control type="password" ref={passRef}  required />
                  </Form.Group>
                  <br/>
                  <br/>
                    <Button disabled={loading} style={{backgroundColor:'#00B1FE'}}  className="w-100" type="submit">
                      Login
                    </Button>
                    <Divider>OR </Divider>
                    <Button disabled={loading} style={{backgroundColor:'#00B1FE'}}  className="w-100" onClick={signInWithGoogle}>
                      Sign in with Google
                    </Button>
                    <br></br><br/>
              </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Don't have an account? <Link to="?status=signup">Register</Link>
        </div>
    </Container>
    </>
  )
}

export default LoginCmp