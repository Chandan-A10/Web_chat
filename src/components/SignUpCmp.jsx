import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert, Container } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { register } from '../firebase/firebase'
import styles from './SignUp.module.css'
import { registerUser } from '../Database/RegisterUser'
import { useDispatch } from 'react-redux'
import { setUser } from '../reducers/userSlice'

const SignUpCmp=()=> {
    const emailRef=useRef()
    const passRef=useRef()
    const confirmRef=useRef()
    const nameRef=useRef()
    const [error, seterror] = useState(null)
    const [loading, setLoading] = useState(false)
    const dispatcher=useDispatch()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
      e.preventDefault()

        if(passRef.current.value !== confirmRef.current.value ){
           return seterror('Password do not match')
        }
        try{
          setLoading(true)
          const user= await register(emailRef.current.value,passRef.current.value,nameRef.current.value)
          registerUser(user.user.uid,nameRef.current.value)
          dispatcher(setUser(user.user.uid))
          navigate('/chatroom')
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
              <h2 className="text-center mb-4" style={{fontFamily:'Arial'}}>Sign Up</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form className={styles.sub_form} onSubmit={handleSubmit}>
                  <Form.Group id="email">
                      <Form.Label>Email :</Form.Label>
                      <Form.Control type="email" ref={emailRef}  required />
                  </Form.Group>

                  <Form.Group id="name">
                      <Form.Label>Your Name :</Form.Label>
                      <Form.Control type="Text" ref={nameRef}  required />
                  </Form.Group>

                  <Form.Group id="password">
                      <Form.Label>Password :</Form.Label>
                      <Form.Control type="password" ref={passRef}  required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                      <Form.Label>Password Confirmation :</Form.Label>
                  <Form.Control type="password" ref={confirmRef} required />
                  </Form.Group>
                  <br/>
                    <Button disabled={loading} style={{backgroundColor:'#00B1FE'}}  className="w-100" type="submit">
                    Sign Up
                    </Button>
                    <br></br><br/>
              </Form>
          </Card.Body>
        </Card>
        <div className="w-100 text-center mt-2">
          Already have an account? <Link to="?status=login">Log In</Link>
        </div>
        </Container>
        </>
    )
}

export default SignUpCmp