import React from 'react';
import { Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    navigate('/login');
  };

  return (
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          backgroundColor: '#f5f5f5',
          overflow: 'auto'
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 2 }}>
          <Button variant="contained" color="secondary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
        {children}
      </Box>
    </Box>
  );
};

export default Layout;