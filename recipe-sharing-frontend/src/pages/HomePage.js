import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Button, Typography, Box } from '@mui/material';
import homepageImage from '../assets/images/AdobeStock_459321141.jpeg';

function HomePage() {
  return (
    <Box
      style={{
        backgroundImage: `url(${homepageImage})`,
        backgroundSize: 'cover',          // Ensures the image covers the entire background
        backgroundPosition: 'center',     // Centers the image
        backgroundAttachment: 'fixed',    // Keeps the background fixed while scrolling
        backgroundRepeat: 'no-repeat',    // Prevents the background from repeating
        width: '100%',                    // Makes sure it covers the full width
        height: '100vh',                  // Full viewport height
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        textAlign: 'center',
      }}
    >
      <Typography variant="h3" style={{ marginBottom: '20px' }}>
        Welcome to Recipe Sharing!
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/register"
        style={{
          backgroundColor: '#ff9800',
          padding: '10px 20px',
          fontSize: '1.2rem',
        }}
      >
        Let's Get Started
      </Button>
    </Box>
  );
}

export default HomePage;
