package com.example.recipes.service;

import com.example.recipes.exception.ResourceNotFoundException;
import com.example.recipes.model.Post;
import com.example.recipes.repository.PostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PostService {

    @Autowired
    private PostRepository postRepository;

    public List<Post> getAllPosts() {
        return postRepository.findAll();
    }

    public Post getPostById(Long id) {
        return postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post not found with id: " + id));
    }

    public Post createPost(Post post) {
        return postRepository.save(post);
    }

    public Post updatePost(Long id, Post postDetails) {
        Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post not found with id: " + id));

        post.setTitle(postDetails.getTitle());
        post.setContent(postDetails.getContent());
        // Update other fields as necessary

        return postRepository.save(post);
    }

    public void deletePost(Long id) {
        Post post = postRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Post not found with id: " + id));
        postRepository.delete(post);
    }
}
