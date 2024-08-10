import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Layout from '../components/Layout';
import KPIBox from '../components/KPIBox';
import { kpis } from '../utils/dummyData';

const Home = () => {
  return (
    <Layout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Welcome to the social media admin dashboard
        </Typography>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
          <KPIBox title="Total Users" value={kpis.totalUsers} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPIBox title="Total Posts" value={kpis.totalPosts} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPIBox title="Active Users (24h)" value={kpis.activeUsers24h} />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <KPIBox title="New Posts (24h)" value={kpis.newPosts24h} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Home;