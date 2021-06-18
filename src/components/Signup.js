import React,{useRef, useState} from 'react'
import { Card,Form,Button,Container,Alert } from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';


export default function Signup() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const confirmPasswordRef=useRef();
    const {signup} = useAuth()
    const[error,setError]=useState('')
    const[loading,setLoading]=useState(false)
    const history=useHistory()

     async function handleSubmit(e){
        e.preventDefault()
        if(passwordRef.current.value!==confirmPasswordRef.current.value){
            return(setError('Passwords do not match'))
        }

        try{
            setError('')
            setLoading(true)
            await signup(emailRef.current.value,passwordRef.current.value)
            history.push('/Login')
        }
        catch{
            setError("Failed to log in")
        }

        setLoading(false)
     }
    return (
        <>
        <Container classname="d-flex align-items-center justify-content-center" style={{minHeight:"100vh", maxWidth:"500px",marginTop:"5%"}}>
                 <Card className="mt-4">
                     <Card.Body>
                         <Form onSubmit={handleSubmit}>
                             {error && <Alert variant="danger">{error}</Alert>}
                             <Form.Group id="email">
                                 <Form.Label>Email</Form.Label>
                                 <Form.Control type="email" ref={emailRef} placeholder="Enter your email id" required/>
                             </Form.Group>
                             <Form.Group id="password">
                                 <Form.Label>New Password</Form.Label>
                                 <Form.Control type="password" ref={passwordRef} required/>
                             </Form.Group>
                             <Form.Group id="confirm_password">
                                 <Form.Label>Confirm Password</Form.Label>
                                 <Form.Control type="password" ref={confirmPasswordRef} required/>
                             </Form.Group>
                             <Button disabled={loading} type= "submit" className="w-100 text-center">Make a new Account</Button>
                         </Form>
                         <div className="w-100 text-center mt-4 ">
                           Already have an account?<Link to="/Login">Login</Link>
                        </div>
                     </Card.Body>
                 </Card>   
         </Container> 
         
         
     </>
     )
 

}
    

    
