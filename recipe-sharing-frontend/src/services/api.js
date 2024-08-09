// src/services/api.js
import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api'; // Replace with your backend URL

export const getUsers = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    throw error;
  }
};

export const getRecipes = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/recipes`);
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    throw error;
  }
};

export const createUser = async (userData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/users`, userData);
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    throw error;
  }
};

export const createRecipe = async (recipeData) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/recipes`, recipeData);
    return response.data;
  } catch (error) {
    console.error('Error creating recipe:', error);
    throw error;
  }
};

