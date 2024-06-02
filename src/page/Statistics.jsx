import React from 'react';
import { Paper, Typography, Divider, Box } from '@mui/material';

const Statistics = () => {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h6">Statistics</Typography>
      <Divider sx={{ marginY: 2 }} />
      <Box>
        <Typography>Mar: 5310 Group</Typography>
        <Typography>Apr: 5310 Group</Typography>
      </Box>
    </Paper>
  );
};

export default Statistics;
