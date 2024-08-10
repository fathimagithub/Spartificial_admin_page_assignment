import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Layout from '../components/Layout';
import KPIBox from '../components/KPIBox';
import UserTable from '../components/UserTable';
import { users, kpis } from '../utils/dummyData';

const Users = () => {
  return (
    <Layout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Users
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage your social media users
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <KPIBox title="Total Users" value={kpis.totalUsers} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <KPIBox title="Active Users (24h)" value={kpis.activeUsers24h} />
        </Grid>
      </Grid>
      <UserTable users={users} />
    </Layout>
  );
};

export default Users;