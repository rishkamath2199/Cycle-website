import React,{useRef,useState} from 'react'
import { Card,Form,Button,Container,Alert } from 'react-bootstrap'
import {Link,useHistory} from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';


export default function Login() {
    const emailRef=useRef();
    const passwordRef=useRef();
    const {login} = useAuth()
    const[error,setError]=useState('')
    const[loading,setLoading]=useState(false)
    const history=useHistory()

     async function handleSubmit(e){
        e.preventDefault()
        try{
            setError('')
            setLoading(true)
            await login(emailRef.current.value,passwordRef.current.value)
            history.push('/')
        }
        catch{
            setError("Failed to Log in")
        }

        setLoading(false)
     }
    return (
       <>
       <Container fluid classname="d-flex justify-content-center mt-4" style={{minHeight:"100vh",maxWidth:"450px",marginTop:"5%"}}>
                <Card className="mt-4">
                    <Card.Body  className="mt-2">
                        <Form onSubmit={handleSubmit}>
                        {error && <Alert variant="danger">{error}</Alert>}
                            <Form.Group id="email" className="mt-2" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required/>
                            </Form.Group>
                            <Form.Group id="password" className="mt-4">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required/>
                            </Form.Group>
                            
                            <Button disabled={loading} type= "submit" className="w-100 mt-3 text-center">Log in</Button>
                        </Form>
                        <div className="w-100 text-center mt-4">
                            Forgot Password?
                        </div>
                        <div className="w-100 text-center mt-3 ">
                           Need an Account ?<Link to="/Signup">Sign up</Link>
                        </div>
        
                    </Card.Body>
                </Card>  
        </Container> 
       
    </>
    )
}
