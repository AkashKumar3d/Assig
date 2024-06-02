import React from 'react';
import { Paper, Typography, Divider, List, ListItem, ListItemText, Button } from '@mui/material';

const Attachments = () => {
  return (
    <Paper sx={{ padding: 2, marginBottom: 2 }}>
      <Typography variant="h6">Attached Files</Typography>
      <Divider sx={{ marginY: 2 }} />
      <List>
        <ListItem>
          <ListItemText primary="Group Description 1" secondary="10 Kb" />
        </ListItem>
        <ListItem>
          <ListItemText primary="Group Description 2" secondary="10 Kb" />
        </ListItem>
      </List>
      <Button variant="outlined" fullWidth>Upload</Button>
    </Paper>
  );
};

export default Attachments;

