// src/components/UserList.js

import React, { useState, useEffect } from 'react';
import api from '../api';

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    api.get('/users')
      .then(response => setUsers(response.data))
      .catch(error => console.error('Error fetching users:', error));
  }, []);

  return (
    <div>
      <h1>User List</h1>
      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name} - {user.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
