
import React, { useState } from 'react'
import { Form,Button, Spinner } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate } from 'react-router';
import { loginUser } from '../redux/action';


const LoginPage = () => {
  const {loading} = useSelector(state => state)

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("");
  
  const dispatch = useDispatch()
  let handelSubmit=(e)=>{
    e.preventDefault();
    dispatch(loginUser({email,password}))
  }
    return (
        <div className='login'>{loading? <Spinner animation="border" variant="success" />:localStorage.getItem("token")?<Navigate to="/admin"/>:
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

export default LoginPage