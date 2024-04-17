import React, { useState } from 'react';
import './Register.css'; // Import the CSS file for styling

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = () => {
        if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim()) {
            setError('Please fill in all fields.');
        } else if (password !== confirmPassword) {
            setError('Passwords do not match.');
        } else {
            // Add your register logic here, such as sending a request to create a new account
            console.log('Registering with username:', username, 'email:', email, 'and password:', password);
            setError('');
            // Reset form fields after successful registration
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        }
    };

    return (
        <div className="register-form">
            <h2>Register</h2>
            {error && <p className="error-message">{error}</p>}
            <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            <button onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Register;