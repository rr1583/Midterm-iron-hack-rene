// src/components/PostForm.js

import React, { useState } from 'react';
import api from '../api';

const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [userId, setUserId] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await api.post('/posts', { title, content, user: { id: userId } });
      alert('Post created successfully');
      setTitle('');
      setContent('');
      setUserId('');
    } catch (error) {
      console.error('Error creating post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content</label>
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label>User ID</label>
        <input type="text" value={userId} onChange={(e) => setUserId(e.target.value)} />
      </div>
      <button type="submit">Create Post</button>
    </form>
  );
};

export default PostForm;
