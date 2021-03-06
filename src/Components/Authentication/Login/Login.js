import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Login.css'

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }

    return (
        <div className='d-flex justify-content-center mt-5 p-2'>
            <div className='form-width px-md-5 px-3 py-4 shadow border'>
                <h1 className='text-center'>Login</h1>
                <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <p>Create an account. <Link className='fw-bold text-decoration-none' to={'/register'}>Signup</Link></p>
                    <p className='text-center text-danger'>{error && error.code.split('/')[1]}</p>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Login;