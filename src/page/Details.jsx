import React from 'react';
import { Box, Paper, Typography, Divider, List, ListItem, ListItemText, Button, IconButton } from '@mui/material';
import DisplaySettingsIcon from '@mui/icons-material/DisplaySettings';
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import ManageHistoryIcon from '@mui/icons-material/ManageHistory';
const Details = () => {
    return (
        <Paper sx={{ padding: 2, marginBottom: 2, border: "0.01rem solid #d6d6d6" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                {/* <IconButton>
                
                </IconButton> */}
                <Typography variant="h6" style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: '0.5rem' }}><DisplaySettingsIcon />Details</Typography>
                <Button>+ Add</Button>
            </div>
            {/* <Divider sx={{ marginY: 2 }} /> */}
            <List>

                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>ID</div>
                    <div>#1</div>
                    {/* <ListItemText primary="ID" secondary="#1" /> */}
                </ListItem>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Lessons</div>
                    <div>1848 items</div>
                </ListItem>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Salary Payments</div>
                    <div>0 items</div>
                </ListItem>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Mobile</div>
                    <div>+7(700)333-17-40</div>
                </ListItem>

            </List>
            <Divider />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: '0.5rem' }}><QueryBuilderIcon />Working Hour</Typography>
                <Button>+ Add</Button>
            </div>
            <List>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Location</div>
                    <div>Any</div>
                </ListItem>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Mon</div>
                    <div>9.00-23.00</div>
                </ListItem>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Tue</div>
                    <div>9.00-23.00</div>
                </ListItem>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <div>Wed</div>
                    <div>9.00-23.00</div>
                </ListItem>
            </List>
            <Divider />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: '0.5rem' }}><WorkspacePremiumIcon />Qualification</Typography>
                <Button>+ Add</Button>
            </div>
            <List>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ width: '100%', paddingY: 2, color: 'black', bgcolor: '#e5e5e5',fontWeight:'bold' }} variant="outline" href="#contained-buttons">Not Set</Button>
                </ListItem>
            </List>

            <Divider />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: '0.5rem' }}><ManageHistoryIcon />Hourly Rates</Typography>
                <Button>+ Add</Button>
            </div>
            <List>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>

                    <Button sx={{ width: '100%', paddingY: 2, color: 'black', bgcolor: '#e5e5e5',fontWeight:'bold',border:'none' }} variant="outline" href="#contained-buttons">Not Set</Button>

                </ListItem>
            </List>

            <Divider />
            <br />
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6" style={{ display: "flex", justifyContent: "center", alignItems: 'center', gap: '0.5rem' }}><ManageHistoryIcon />Access To CRM</Typography>
                <Button>+ Add</Button>
            </div>
            <List>
                <ListItem style={{ display: "flex", justifyContent: "space-between" }}>
                    <Button sx={{ width: '100%', paddingY: 2, color: 'black', bgcolor: '#e5e5e5',fontWeight:'bold',border:'none' }} variant="outline" href="#contained-buttons">Not Set</Button>

                </ListItem>
            </List>
        </Paper>
    );
};

export default Details;
