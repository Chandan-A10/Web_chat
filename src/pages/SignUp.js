import React from 'react'
import SignUpCmp from '../components/SignUpCmp'
import { Container } from 'react-bootstrap'

const SignUp=()=> {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
    <div className="w-100" style={{ maxWidth: "400px" }}>
    <SignUpCmp/>
    </div>
    </Container>
  )
}

export default SignUp