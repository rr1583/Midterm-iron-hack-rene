// src/AppRouter.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UserList from './components/UserList';
import UserForm from './components/UserForm';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path="/users" component={UserList} />
      <Route path="/user/new" component={UserForm} />
      <Route path="/posts" component={PostList} />
      <Route path="/post/new" component={PostForm} />
      <Route path="/" exact component={UserList} />
    </Switch>
  </Router>
);

export default AppRouter;
