import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@mui/material';

const PostTable = ({ posts }) => {
  return (
    <TableContainer component={Paper} elevation={3} sx={{ mt: 4 }}>
      <Table sx={{ minWidth: 650 }} aria-label="post table">
        <TableHead>
          <TableRow sx={{ backgroundColor: '#f5f5f5' }}>
            <TableCell>Post ID</TableCell>
            <TableCell>Caption</TableCell>
            <TableCell>Media URL</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {posts.map((post) => (
            <TableRow key={post.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell>{post.id}</TableCell>
              <TableCell>{post.caption}</TableCell>
              <TableCell>{post.mediaUrl}</TableCell>
              <TableCell>
                <Button variant="contained" color="primary" size="small" sx={{ mr: 1 }}>
                  Hide
                </Button>
                <Button variant="contained" color="error" size="small">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default PostTable;