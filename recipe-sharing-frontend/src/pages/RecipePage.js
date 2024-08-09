import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Grid, Typography, Button, TextField } from '@mui/material';

function RecipePage() {
  const [recipes, setRecipes] = useState([]);
  const [comments, setComments] = useState({}); // Store comments for each recipe
  const [ratings, setRatings] = useState({}); // Store ratings for each recipe

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/recipes');
        setRecipes(response.data);
      } catch (error) {
        console.error('Failed to fetch recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const handleCommentSubmit = async (recipeId) => {
    const comment = comments[recipeId];
    try {
      await axios.post(`http://localhost:8080/api/recipes/${recipeId}/comments`, { comment });
      setComments({ ...comments, [recipeId]: '' });
      alert('Comment added successfully!');
    } catch (error) {
      console.error('Failed to add comment:', error);
    }
  };

  const handleRatingSubmit = async (recipeId) => {
    const rating = ratings[recipeId];
    try {
      await axios.post(`http://localhost:8080/api/recipes/${recipeId}/ratings`, { rating });
      setRatings({ ...ratings, [recipeId]: '' });
      alert('Rating added successfully!');
    } catch (error) {
      console.error('Failed to add rating:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Recipes
      </Typography>
      <Grid container spacing={3}>
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <Typography variant="h6">{recipe.title}</Typography>
            <Typography variant="body2">Ingredients: {recipe.ingredients}</Typography>
            <Typography variant="body2">Instructions: {recipe.instructions}</Typography>
            <Typography variant="body2">Category: {recipe.category}</Typography>
            <TextField
              label="Your Rating"
              value={ratings[recipe.id] || ''}
              onChange={(e) => setRatings({ ...ratings, [recipe.id]: e.target.value })}
              fullWidth
              margin="normal"
            />
            <Button variant="outlined" color="secondary" onClick={() => handleRatingSubmit(recipe.id)}>
              Rate
            </Button>
            <TextField
              label="Your Comment"
              value={comments[recipe.id] || ''}
              onChange={(e) => setComments({ ...comments, [recipe.id]: e.target.value })}
              fullWidth
              margin="normal"
              style={{ marginTop: '10px' }}
            />
            <Button variant="outlined" color="primary" onClick={() => handleCommentSubmit(recipe.id)}>
              Comment
            </Button>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RecipePage;
