import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Container, Typography, Card, CardContent, Grid } from '@mui/material';

function UsersPage() {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get('/api/users');
      console.log('Users:', response.data); // Log the response to verify the data
      setUsers(response.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Users
      </Typography>
      {users.length > 0 ? (
        <Grid container spacing={3}>
          {users.map((user) => (
            <Grid item xs={12} sm={6} md={4} key={user.id}>
              <Card>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {user.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    Email: {user.email}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        <Typography variant="h6">No users found</Typography>
      )}
    </Container>
  );
}

export default UsersPage;
