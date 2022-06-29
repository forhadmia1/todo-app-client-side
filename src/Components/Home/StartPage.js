import { Button } from 'react-bootstrap';
import React from 'react';

const StartPage = () => {
    return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: '80vh' }}>
            <div >
                <h1>Welcome to Todo App</h1>
                <div className='d-flex justify-content-center mt-4'>
                    <Button>Get Started</Button>
                </div>
            </div>
        </div>
    );
};

export default StartPage;