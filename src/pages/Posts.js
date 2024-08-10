import React from 'react';
import { Typography, Box, Grid } from '@mui/material';
import Layout from '../components/Layout';
import KPIBox from '../components/KPIBox';
import PostTable from '../components/PostTable';
import { posts, kpis } from '../utils/dummyData';

const Posts = () => {
  return (
    <Layout>
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Posts
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Manage your social media posts
        </Typography>
      </Box>
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6}>
          <KPIBox title="Total Posts" value={kpis.totalPosts} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <KPIBox title="New Posts (24h)" value={kpis.newPosts24h} />
        </Grid>
      </Grid>
      <PostTable posts={posts} />
    </Layout>
  );
};

export default Posts;