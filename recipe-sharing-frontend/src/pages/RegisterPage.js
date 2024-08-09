import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Link } from '@mui/material';

function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/users', {
        name,
        email,
        password,
      });
      setMessage('Registration successful! You can now log in.');
      setError(null);
      // Redirect to login page after successful registration
      window.location.href = '/login';
    } catch (error) {
      setError('Registration failed. Please try again.');
      setMessage(null);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Register
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
        />
        {error && <Typography color="error">{error}</Typography>}
        {message && <Typography color="primary">{message}</Typography>}
        <Button variant="contained" color="primary" onClick={handleRegister} style={{ marginTop: '20px' }}>
          Register
        </Button>
        <Typography variant="body2" style={{ marginTop: '20px' }}>
          Already have an account? <Link href="/login">Log in here</Link>
        </Typography>
      </form>
    </Container>
  );
}

export default RegisterPage;
