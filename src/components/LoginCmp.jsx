import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { register } from '../firebase/firebase'
import styles from './Login.module.css'

const LoginCmp=()=> {
  const emailRef=useRef()
  const passRef=useRef()
  const confirmRef=useRef()
  const [error, seterror] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit=async(e)=>{
    e.preventDefault()

      if(passRef.current.value !== confirmRef.current.value ){
         return seterror('Password do not match')
      }
      try{
        setLoading(true)
        const user= await register(emailRef.current.value,passRef.current.value) 
        console.log(user)
      }
      catch(error){
        console.log(error)
      }
      setLoading(false)
  }
    return (
    <>
    <Container className={styles.container}>
      <Card className={styles.form}>
          <Card.Body>
              <h2 className="text-center mb-4">Login </h2>
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
                    Sign Up
                    </Button>
                    <br></br><br/>
              </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="/login">Log In</Link>
        </div>
    </Container>
    </>
  )
}

export default LoginCmp