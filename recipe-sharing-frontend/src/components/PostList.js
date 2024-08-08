// src/components/PostList.js

import React, { useState, useEffect } from 'react';
import api from '../api';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get('/posts')
      .then(response => setPosts(response.data))
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div>
      <h1>Post List</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <p>By: {post.user.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
