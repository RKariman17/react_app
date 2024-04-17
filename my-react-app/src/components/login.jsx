import React, { useState } from 'react';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = () => {
        if (!username.trim() || !password.trim()) {
            setError('Please fill in both username and password fields.');
        } else {
            // Add your login logic here, such as sending a request to authenticate the user
            console.log('Logging in with username:', username, 'and password:', password);
            setError('');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor: '#f9f9f9', maxWidth: '300px', margin: '0 auto' }}>
            <h2 style={{ textAlign: 'center', fontSize: '1.5rem', color: '#333', marginBottom: '20px' }}>Login</h2>
            {error && <p style={{ color: 'red', marginBottom: '10px' }}>{error}</p>}
            <label style={{ marginBottom: '10px' }}>Username:</label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }} />
            <label style={{ marginBottom: '10px' }}>Password:</label>
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', marginBottom: '15px', border: '1px solid #ccc', borderRadius: '5px' }} />
            <button type="button" onClick={handleLogin} style={{width:'100px', padding: '10px 20px', backgroundColor: '#3498db', color: '#fff', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s' }}>Login</button>
        </div>
    );
};

export default Login;