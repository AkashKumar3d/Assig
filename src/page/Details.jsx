import React from 'react';
import { Box, Paper, Typography, Divider, List, ListItem, ListItemText, Button } from '@mui/material';

const Details = () => {
    return (
        <Paper sx={{ padding: 2, marginBottom: 2 }}>
            <div style={{display:"flex", justifyContent:"space-between"}}>
                <Typography variant="h6">Details</Typography>
                <Button>+ Add</Button>
            </div>
            <Divider sx={{ marginY: 2 }} />
            <List>
                <ListItem style={{display:"flex", justifyContent:"space-between"}}>
                    <ListItemText primary="ID" secondary="#1" />

                </ListItem>
                <ListItem>
                    <ListItemText primary="Lessons" secondary="1848 items" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Salary Payments" secondary="0 items" />
                </ListItem>
                <ListItem>
                    <ListItemText primary="Mobile" secondary="+7(700)333-17-40" />
                </ListItem>
            </List>
        </Paper>
    );
};

export default Details;
