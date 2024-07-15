package com.example.recipes.controller;

import com.example.recipes.model.Recipe;
import com.example.recipes.repository.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/recipes")
public class RecipeController {

    @Autowired
    private RecipeRepository recipeRepository;

    @GetMapping
    public List<Recipe> getAllRecipes() {
        return recipeRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Recipe> getRecipeById(@PathVariable Long id) {
        return recipeRepository.findById(id)
                .map(recipe -> ResponseEntity.ok().body(recipe))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Recipe createRecipe(@RequestBody Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Recipe> updateRecipe(@PathVariable Long id, @RequestBody Recipe recipeDetails) {
        return recipeRepository.findById(id)
                .map(recipe -> {
                    recipe.setTitle(recipeDetails.getTitle());
                    recipe.setIngredients(recipeDetails.getIngredients());
                    recipe.setInstructions(recipeDetails.getInstructions());
                    recipe.setCategory(recipeDetails.getCategory());
                    return ResponseEntity.ok().body(recipeRepository.save(recipe));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRecipe(@PathVariable Long id) {
        return recipeRepository.findById(id)
                .map(recipe -> {
                    recipeRepository.delete(recipe);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
