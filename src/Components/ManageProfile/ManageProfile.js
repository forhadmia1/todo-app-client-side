import React, { useState } from 'react';
import { useAuthState, useSendPasswordResetEmail, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const ManageProfile = () => {
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [user, loading] = useAuthState(auth)
    const [isEdit, setEdit] = useState(false)
    const [name, setName] = useState(user?.displayName)
    const [updateProfile, updating, error] = useUpdateProfile(auth);

    if (loading) {
        return <p>Loading....</p>
    }

    const updateUserName = async () => {
        await updateProfile({ displayName: name });
        setEdit(false)
    }

    return (
        <div className='container'>
            <h3 className='text-center mt-2'>My Profile:</h3>
            <div className='d-flex align-items-center mb-4 mt-5'>
                <h5 className='me-5'>Username:{!isEdit ?
                    <span className='fs-4 ms-2'>{user && user?.displayName}</span> :
                    <input onChange={(e) => setName(e.target.value)} value={name} className='ms-2' type="text" />
                }</h5>
                {!isEdit ? <button onClick={() => setEdit(true)} className='btn btn-dark'>Edit</button> :
                    <button onClick={updateUserName} className='btn btn-success'>Save</button>}
            </div>
            <h5><span className='fs-5'>Email:</span> {user && user?.email}</h5>
            <div className='mt-4'>
                <button onClick={async () => {
                    await sendPasswordResetEmail(user?.email)
                    alert("Email Sent, Please Check your Email!")
                }} className='btn btn-warning fw-bold'>Reset password</button>
            </div>
        </div>
    );
};

export default ManageProfile;