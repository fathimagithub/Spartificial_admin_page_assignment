import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const UserTable = ({ users }) => {
  return (
    <TableContainer component={Paper} elevation={3} sx={{ mt: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="user table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell>User ID</TableCell>
            <TableCell>Username</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.username}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                  Edit
                </Button>
                <Button variant="contained" color="error" size="small">
                  Ban
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;