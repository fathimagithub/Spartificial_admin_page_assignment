import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { Home, People, Image } from '@mui/icons-material';

const Navbar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#1976d2',
          color: 'white'
        },
      }}
    >
      <Typography variant="h6" sx={{ p: 2, fontWeight: 'bold' }}>
        Admin Dashboard
      </Typography>
      <List>
        {[
          { text: 'Home', icon: <Home />, path: '/' },
          { text: 'Users', icon: <People />, path: '/users' },
          { text: 'Posts', icon: <Image />, path: '/posts' }
        ].map((item) => (
          <ListItem
            button
            key={item.text}
            component={Link}
            to={item.path}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
              },
            }}
          >
            <ListItemIcon sx={{ color: 'white' }}>{item.icon}</ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default Navbar;