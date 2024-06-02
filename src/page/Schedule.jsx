import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const Schedule = () => {
  const rows = [
    { date: 'Saturday 27.04.2024', time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16f )', session: '90 Minutes', status: 'Regular' }, 
  ];

  return (
    <Paper sx={{ padding: 2 }}>
      <Typography variant="h6" sx={{ padding: 2 }}>Schedule for the next 7 days</Typography>
      <TableContainer>  
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Time</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Session</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow key={index}>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.time}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.session}</TableCell>
                <TableCell>{row.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>Attached Files</Typography>
        <IconButton color="primary">
          <AttachFileIcon />
        </IconButton>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <AttachFileIcon />
          <Typography>Group Description 1</Typography>
        </Paper>
        <Paper sx={{ padding: 2, display: 'flex', alignItems: 'center', gap: 1 }}>
          <AttachFileIcon />
          <Typography>Group Description 2</Typography>
        </Paper>
      </Box>
    </Paper>
  );
};

export default Schedule;
