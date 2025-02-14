import React from 'react';

function CreateAccount() {
    return (
        <div style={{ padding: '20px' }}>
            <h2>Create Account</h2>
            <input type="text" placeholder="Username" style={{ display: 'block', marginBottom: '8px', padding: '5px' }} />
            <input type="email" placeholder="Email" style={{ display: 'block', marginBottom: '8px', padding: '5px' }} />
            <input type="password" placeholder="Password" style={{ display: 'block', marginBottom: '8px', padding: '5px' }} />
            <button style={{ padding: '8px 16px', border: '2px solid red', backgroundColor: 'transparent', color: 'black', borderRadius: '4px' }}>Sign Up</button>
        </div>
    );
}

export default CreateAccount