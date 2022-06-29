import React from 'react';

const ManageProfile = () => {
    return (
        <div className='container'>
            <h3 className='text-center'>My Profile:</h3>
            <h4>Username:</h4>
            <h5>Email:</h5>
            <div className='mt-4'>
                <button className='btn btn-warning fw-bold'>Reset password</button>
            </div>
        </div>
    );
};

export default ManageProfile;