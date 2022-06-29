import { Button } from 'react-bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {
    const navigate = useNavigate()
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
            <div >
                <h1>Welcome to Todo App</h1>
                <div className='d-flex justify-content-center mt-4'>
                    <Button onClick={() => navigate('/login')}>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default StartPage;