import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const KPIBox = ({ title, value }) => {
  return (
    <Paper
      elevation={3}
      sx={{
        p: 3,
        textAlign: 'center',
        m: 1,
        minWidth: 200,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      <Typography variant="h6" color="text.secondary" gutterBottom>
        {title}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: 80,
        }}
      >
        <Typography variant="h3" color="primary">
          {value}
        </Typography>
      </Box>
    </Paper>
  );
};

export default KPIBox;