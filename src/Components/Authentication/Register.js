import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()

    const handleSignup = async (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        await createUserWithEmailAndPassword(email, password)
        await updateProfile({ displayName: name });
    }

    if (user) {
        navigate('/')
    }

    return (
        <div className='d-flex justify-content-center mt-5 p-2'>
            <div className='form-width px-md-5 px-3 py-4 shadow border'>
                <h1 className='text-center'>Register</h1>
                <Form onSubmit={handleSignup}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control name='name' type="text" placeholder="Enter username" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" />
                    </Form.Group>
                    <p>Already have an account. <Link className='fw-bold text-decoration-none' to={'/login'}>Login</Link></p>
                    <p className='text-center text-danger'>{error && error.code.split('/')[1]}</p>
                    <div className='d-flex justify-content-center'>
                        <Button variant="primary" type="submit">
                            Signup
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    );
};

export default Register;