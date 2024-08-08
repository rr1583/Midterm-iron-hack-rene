// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path="/users" element={<UserList />} />
      <Route path="/user/new" element={<UserForm />} />
      <Route path="/posts" element={<PostList />} />
      <Route path="/post/new" element={<PostForm />} />
      <Route path="/" element={<UserList />} />
    </Routes>
  </Router>
);

export default AppRouter;
