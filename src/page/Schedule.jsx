import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, Box, IconButton } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import EventRepeatIcon from '@mui/icons-material/EventRepeat';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import SummarizeIcon from '@mui/icons-material/Summarize';
const Schedule = () => {
  const rows = [
    { day: `Saturday`, date: `27.04.2024`, time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16f )', session: '90 Minutes', status: 'Regular' },
    { day: `Saturday`, date: `27.04.2024`, time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16f )', session: '90 Minutes', status: 'Regular' },
    { day: `Saturday`, date: `27.04.2024`, time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16f )', session: '90 Minutes', status: 'Regular' },
    { day: `Saturday`, date: `27.04.2024`, time: '12:30 - 14:00', description: 'Sat/Sun 12:30 89 School, Vladimir (4+ years) Do Not Record (16f )', session: '90 Minutes', status: 'Regular' },
  ];

  return (
    <Paper sx={{ padding: 2 }} style={{ border: "0.01rem solid #d6d6d6" }}>
      <div className='cus-sche-head'>
        <EventRepeatIcon />
        <Typography variant="h5" sx={{ padding: 2, fontSize: '16px' }}><b>Schedule for the next 7 days</b></Typography>
      </div>
      <TableContainer>
        <Table className='cus-table'>
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
              <TableRow key={index} className='cus-table-row'>
                <TableCell className='cus-table-td'><div>{row.day}</div><div>{row.date}</div></TableCell>
                <TableCell className='cus-table-td'><b>{row.time}</b><br /><br /><b>{row.time}</b><br /><br /><b>{row.time}</b></TableCell>
                <TableCell className='cus-table-td2'>
                  <h4>                  {row.description}    </h4>
                  <h4>                  {row.description}    </h4>
                  <h4>                  {row.description}    </h4>
                </TableCell>
                {/* <TableCell className='cus-table-td2'>
                  <h4>                  {row.session}    </h4>
                  <h4>                  {row.session}    </h4>
                  <h4>                  {row.session}    </h4>
                </TableCell> */}
                <TableCell className='cus-table-td'><b>{row.session}</b><br /><br /><b>{row.session}</b><br /><br /><b>{row.session}</b></TableCell>
                <TableCell className='cus-table-td'><b>{row.status}</b><br /><br /><b>{row.status}</b><br /><br /><b>{row.status}</b></TableCell>

                {/* <TableCell>{row.session}</TableCell> */}
                {/* <TableCell>{row.status}</TableCell> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}>
        {/* <div> */}
        {/* <Typography> */}
        <IconButton  sx={{color:'black'}}>

        <FileCopyIcon/>
        </IconButton>

        <Typography variant="h6" sx={{ flexGrow: 1,fontSize:'18px' }}>Attached Files</Typography>
      {/* </div> */}
        <IconButton  sx={{color:'rgb(108, 106, 130)'}}>
          <AttachFileIcon />
        </IconButton>
        <Typography variant="h3" sx={{fontSize:'18px',color:'rgb(108, 106, 130)'  }}>Upload</Typography>
      </Box>
      <Box sx={{ display: 'flex', gap: 2, marginTop: 2 }}>
        <Paper sx={{ padding: 1, textOverflow:'ellipsis',display: 'flex', alignItems: 'center', gap: 1 }}>
          <SummarizeIcon sx={{color:'rgba(10,106,191,0.7)'}} />
          <Typography sx={{textOverflow:'ellipsis',fontSize:'13px'}}>Group Description... <br/><Typography sx={{fontSize:'13px'}}>10 kb</Typography></Typography>
       
        </Paper>
        <Paper sx={{ padding: 1, display: 'flex', alignItems: 'center', gap: 1 }}>
          <SummarizeIcon sx={{color:'rgba(10,106,191,0.7)'}}/>
          <Typography sx={{textOverflow:'ellipsis',fontSize:'13px'}}>Group Description... <br/><Typography sx={{fontSize:'13px'}}>10 kb</Typography></Typography>
          {/* <Typography sx={{textOverflow:'ellipsis'}}>Group Description... <br/>10kb</Typography> */}
        
        </Paper>
      </Box>
    </Paper>
  );
};

export default Schedule;
