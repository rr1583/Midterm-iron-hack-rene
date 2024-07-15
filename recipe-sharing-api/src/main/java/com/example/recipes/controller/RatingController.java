package com.example.recipes.controller;

import com.example.recipes.model.Rating;
import com.example.recipes.repository.RatingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ratings")
public class RatingController {

    @Autowired
    private RatingRepository ratingRepository;

    @GetMapping
    public List<Rating> getAllRatings() {
        return ratingRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rating> getRatingById(@PathVariable Long id) {
        return ratingRepository.findById(id)
                .map(rating -> ResponseEntity.ok().body(rating))
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Rating createRating(@RequestBody Rating rating) {
        return ratingRepository.save(rating);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Rating> updateRating(@PathVariable Long id, @RequestBody Rating ratingDetails) {
        return ratingRepository.findById(id)
                .map(rating -> {
                    rating.setRating(ratingDetails.getRating());
                    rating.setReview(ratingDetails.getReview());
                    return ResponseEntity.ok().body(ratingRepository.save(rating));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteRating(@PathVariable Long id) {
        return ratingRepository.findById(id)
                .map(rating -> {
                    ratingRepository.delete(rating);
                    return ResponseEntity.ok().<Void>build();
                })
                .orElse(ResponseEntity.notFound().build());
    }
}
