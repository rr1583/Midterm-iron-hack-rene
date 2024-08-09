import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography } from '@mui/material';

function PostRecipePage() {
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');
  const [category, setCategory] = useState('');
  const [message, setMessage] = useState(null);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await axios.post('http://localhost:8080/api/recipes', {
        title,
        ingredients,
        instructions,
        category,
      }, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setMessage('Recipe posted successfully!');
      setTitle('');
      setIngredients('');
      setInstructions('');
      setCategory('');
    } catch (error) {
      setMessage('Failed to post recipe. Please try again.');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Post a New Recipe
      </Typography>
      <form noValidate autoComplete="off">
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Instructions"
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          fullWidth
          margin="normal"
        />
        {message && <Typography color="primary">{message}</Typography>}
        <Button variant="contained" color="primary" onClick={handleSubmit} style={{ marginTop: '20px' }}>
          Post Recipe
        </Button>
      </form>
    </Container>
  );
}

export default PostRecipePage;
