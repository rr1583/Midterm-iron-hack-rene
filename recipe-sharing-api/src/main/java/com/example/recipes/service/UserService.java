package com.example.recipes.service;

import com.example.recipes.exception.ResourceNotFoundException;
import com.example.recipes.model.User;
import com.example.recipes.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // Method to get all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Method to get a user by ID
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
    }

    // Method to save a user with enhanced error handling
    public User saveUser(User user) {
        try {
            return userRepository.save(user);
        } catch (Exception e) {
            // Log the exception with more detail for debugging
            System.err.println("Error occurred while saving user: " + e.getMessage());
            e.printStackTrace(); // Print the full stack trace to understand the error
            throw e; // Re-throw the exception to ensure it's caught by the controller
        }
    }

    // Method to update a user
    public User updateUser(Long id, User userDetails) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));

        user.setName(userDetails.getName());
        user.setEmail(userDetails.getEmail());
        user.setPassword(userDetails.getPassword());
        // Update other fields as necessary

        try {
            return userRepository.save(user);
        } catch (Exception e) {
            System.err.println("Error occurred while updating user: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }

    // Method to delete a user by ID
    public void deleteUser(Long id) {
        User user = userRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + id));
        try {
            userRepository.delete(user);
        } catch (Exception e) {
            System.err.println("Error occurred while deleting user: " + e.getMessage());
            e.printStackTrace();
            throw e;
        }
    }

    // Method to find a user by email
    public User findByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with email: " + email));
    }
}
