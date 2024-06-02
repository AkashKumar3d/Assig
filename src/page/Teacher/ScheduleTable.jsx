import React from 'react';
import { 
  Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, Typography, 
  IconButton, Button 
} from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';
import AttachFileIcon from '@mui/icons-material/AttachFile';

const ScheduleTable = () => {
  const rows = [
    { date: 'Saturday 27.04.2024', time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16/!)', session: '90 Minutes', status: 'Regular' },
    { date: 'Saturday 27.04.2024', time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16/!)', session: '90 Minutes', status: 'Regular' },
    { date: 'Saturday 27.04.2024', time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16/!)', session: '90 Minutes', status: 'Regular' },
    { date: 'Saturday 27.04.2024', time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16/!)', session: '90 Minutes', status: 'Regular' },
    { date: 'Saturday 27.04.2024', time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16/!)', session: '90 Minutes', status: 'Regular' },
    { date: 'Saturday 27.04.2024', time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16/!)', session: '90 Minutes', status: 'Regular' },
    { date: 'Saturday 27.04.2024', time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16/!)', session: '90 Minutes', status: 'Regular' },
    { date: 'Saturday 27.04.2024', time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16/!)', session: '90 Minutes', status: 'Regular' },
    // Add more rows as needed
  ];

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Schedule for the next 7 days
      </Typography>
      <TableContainer component={Paper}>
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
      <div style={{ marginTop: 16 }}>
        <Typography variant="subtitle1" gutterBottom>
          Attached Files
        </Typography>
        <div>
          <IconButton>
            <AttachFileIcon />
            <Typography variant="body2">Group Description</Typography>
          </IconButton>
          <IconButton>
            <AttachFileIcon />
            <Typography variant="body2">Group Description</Typography>
          </IconButton>
        </div>
        <Button variant="contained" startIcon={<UploadFileIcon />} style={{ marginTop: 16 }}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default ScheduleTable;
