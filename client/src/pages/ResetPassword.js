import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ResetPassword = () => {
    const [password, setPassword] = useState('');
    const { token } = useParams();
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        const api = 'url here'
        e.preventDefault();
        try {
            const response = await axios.patch(`${api}/resetPassword/${token}`, { password });
            console.log(response);
            window.location.href = '/'
            if (response.status === 200) {
            } else {
                setError('Password reset failed');
            }
        } catch (error) {
            console.log(error);
            setError('Internal server error')
        }
    };

    return (
        <form id='resetPassword' onSubmit={handleSubmit}>
            <label>New Password</label>
            <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type='submit'>Reset Password</button>
            {error && <p>{error}</p>}
        </form>
    )
}

export default ResetPassword;