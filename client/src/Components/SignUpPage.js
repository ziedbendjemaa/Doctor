import React, { useState } from 'react'
import { Form,Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { signUpUser } from '../redux/action';
import { Navigate  } from "react-router-dom";

const SignUpPage = () => {
  const {loading,user} = useSelector(state => state)
  const [FirstName, setFirstName] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("")
  const dispatch = useDispatch()
  let handelSubmit=(e)=>{
    e.preventDefault();
    dispatch(signUpUser({FirstName,email,number,password}))
  }
    return (
        <div className='signup'>{loading? <Spinner animation="border" variant="success" />:user?<Navigate  to="/login"/>:
         <Form onSubmit={handelSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={email} onChange={e=>setEmail(e.target.value)} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
    <Form.Label>First Name</Form.Label>
    <Form.Control  placeholder="First Name" value={FirstName} onChange={e=>setFirstName(e.target.value)} />
    <Form.Label>Number</Form.Label>
    <Form.Control  placeholder="Phone Number" value={number} onChange={e=>setNumber(e.target.value)} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit" >
    Submit
  </Button>
</Form>  
        }
        </div>
    )
}

export default SignUpPage
