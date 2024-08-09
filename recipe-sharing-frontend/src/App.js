import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Container, Button, Grid } from '@mui/material';
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import RecipesPage from './pages/RecipePage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';

function App() {
  return (
    <Router>
      <AppBar position="static" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Recipe Sharing App
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/users">Users</Button>
          <Button color="inherit" component={Link} to="/recipes">Recipes</Button>
          <Button color="inherit" component={Link} to="/register">Register</Button>
          <Button color="inherit" component={Link} to="/login">Login</Button>
        </Toolbar>
      </AppBar>
      <Container>
        <Grid container spacing={2} style={{ marginTop: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/recipes" element={<RecipesPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </Grid>
      </Container>
    </Router>
  );
}

export default App;
