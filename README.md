# Recipe Sharing API

## Project Description
A RESTful API for sharing and rating recipes built with Java and Spring Boot.

## Class Diagram

Class Diagram

![Copy of UML IronHack Midterm copy](https://github.com/user-attachments/assets/e73b4a29-40a3-4a25-8e88-b7c6c22225d1)

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/rr1583/Midterm-iron-hack-rene.git
   ```
2. Navigate to the project directory:
 ```bash
  cd Midterm-iron-hack-rene
 ```

3. Navigate to the project directory:
```bash
mvn spring-boot:run
 ```


## Technologies Used

* Java 17
  
* Spring Boot
  
* Spring Data JPA
  
* Spring Security
  
* MySQL
  
* Maven
  
* Hibernate 

  
## Controllers and Routes Structure

### User Controller

* GET /api/users: Get all users
  
* GET /api/users/{id}: Get user by ID
  
* POST /api/users: Create a new user
  
* PUT /api/users/{id}: Update a user
  
* DELETE /api/users/{id}: Delete a user

  
### Recipe Controller

* GET /recipes: Get all recipes
  
* GET /recipes/{id}: Get recipe by ID
  
* POST /recipes: Create a new recipe
  
* PUT /recipes/{id}: Update a recipe
  
* DELETE /recipes/{id}: Delete a recipe

  
### Rating Controller

* GET /ratings: Get all ratings
  
* GET /ratings/{id}: Get rating by ID
  
* POST /ratings: Create a new rating
  
* PUT /ratings/{id}: Update a rating
  
* DELETE /ratings/{id}: Delete a rating

## Future Work

* Implement DTOs for better data management
* Add user authentication and authorization
* Enhance error handling and validation
  
## SlideShow
https://docs.google.com/presentation/d/e/2PACX-1vT8EOEXxut9EhL_ovA_eV_ips84HcnJLeBh4B9gB5_2jL6n4eh0a5rXX8ktN-dH-x1QKPrLCULv9kt3/pub?start=false&loop=false&delayms=10000


## Team Members
René Reyes

