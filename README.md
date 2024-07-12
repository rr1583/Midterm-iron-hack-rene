Recipe Sharing API

Description of the Project

This project is a Recipe Sharing API built with Spring Boot. It allows users to create, view, update, and delete recipes, as well as rate and review them. The API uses JWT for authentication and authorization.

Class Diagram

![Copy of UML IronHack Midterm copy](https://github.com/user-attachments/assets/e73b4a29-40a3-4a25-8e88-b7c6c22225d1)

Setup

Prerequisites

* Java 17
  
* MySQL
  
* Maven
  
Installation


Clone the repository:


Create a MySQL database:
 CREATE DATABASE recipe_db;



Technologies Used


* Java 17
  
* Spring Boot
  
* Spring Data JPA
  
* Spring Security
  
* JWT
  
* MySQL
  
* Maven

  
Controllers and Routes Structure

User Controller

* GET /api/users: Get all users
  
* GET /api/users/{id}: Get user by ID
  
* POST /api/users: Create a new user
  
* PUT /api/users/{id}: Update a user
  
* DELETE /api/users/{id}: Delete a user

  
Recipe Controller

* GET /recipes: Get all recipes
  
* GET /recipes/{id}: Get recipe by ID
  
* POST /recipes: Create a new recipe
  
* PUT /recipes/{id}: Update a recipe
  
* DELETE /recipes/{id}: Delete a recipe

  
Rating Controller

* GET /ratings: Get all ratings
  
* GET /ratings/{id}: Get rating by ID
  
* POST /ratings: Create a new rating
  
* PUT /ratings/{id}: Update a rating
  
* DELETE /ratings/{id}: Delete a rating
  
