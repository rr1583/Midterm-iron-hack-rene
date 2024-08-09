import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });
      setMessage('Login successful!');
      setError(null);
      // If using a token-based system, save the token
      // localStorage.setItem('token', response.data.token);
      window.location.href = '/user-homepage'; // Redirect to the user homepage after login
    } catch (error) {
      setError('Login failed. Please check your credentials and try again.');
      setMessage(null);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <form noValidate autoComplete="off">
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
        <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: '20px' }}>
          Login
        </Button>
      </form>
      <Typography style={{ marginTop: '20px' }}>
        Don't have an account? <Link component={RouterLink} to="/register">Register here</Link>
      </Typography>
    </Container>
  );
}

export default LoginPage;
