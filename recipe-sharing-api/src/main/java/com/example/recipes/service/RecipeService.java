package com.example.recipes.service;

import com.example.recipes.model.Recipe;
import com.example.recipes.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RecipeService {

    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe getRecipeById(Long id) {
        return recipeRepository.findById(id).orElse(null);
    }

    public Recipe saveRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public Recipe updateRecipe(Long id, Recipe recipeDetails) {
        return recipeRepository.findById(id).map(recipe -> {
            recipe.setTitle(recipeDetails.getTitle());
            recipe.setIngredients(recipeDetails.getIngredients());
            recipe.setInstructions(recipeDetails.getInstructions());
            recipe.setCategory(recipeDetails.getCategory());
            return recipeRepository.save(recipe);
        }).orElse(null);
    }

    public boolean deleteRecipe(Long id) {
        return recipeRepository.findById(id).map(recipe -> {
            recipeRepository.delete(recipe);
            return true;
        }).orElse(false);
    }
}
