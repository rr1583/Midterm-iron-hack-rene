import React from 'react';
import { Container, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

function UserHomepage() {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Welcome to Your Recipe Sharing Hub
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/post-recipe" style={{ marginBottom: '20px' }}>
        Post a Recipe
      </Button>
      <Typography variant="h5" gutterBottom>
        Explore Recipes:
      </Typography>
      <Grid container spacing={3}>
        {/* Render recipes here, each with options to rate and comment */}
        {/* Placeholder code - replace with dynamic content */}
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Recipe Title</Typography>
          <Button variant="outlined" color="secondary">Rate</Button>
          <Button variant="outlined" color="primary" style={{ marginLeft: '10px' }}>Comment</Button>
        </Grid>
        {/* More recipes... */}
      </Grid>
    </Container>
  );
}

export default UserHomepage;
