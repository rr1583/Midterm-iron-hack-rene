import React, { useState } from 'react';
import { TextField, Button, Typography, Grid, Paper } from '@mui/material';

function UsersPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    // Add the logic to submit user data to the API
    console.log('User Added:', { name, email, password });
  };

  return (
    <Paper style={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      <Typography variant="h6" gutterBottom>
        Add User
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Name"
            variant="outlined"
            fullWidth
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Password"
            type="password"
            variant="outlined"
            fullWidth
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Add User
          </Button>
        </Grid>
      </Grid>
      <Typography variant="h6" gutterBottom style={{ marginTop: '20px' }}>
        User List
      </Typography>
      {/* Add user list rendering here */}
    </Paper>
  );
}

export default UsersPage;
