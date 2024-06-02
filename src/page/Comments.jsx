import React from 'react';
import { Paper, Typography, Divider, TextField, Button, ImageListItem, IconButton, colors } from '@mui/material';
import ForumIcon from '@mui/icons-material/Forum';
// import { BorderBottom } from '@mui/icons-material';
import HistoryIcon from '@mui/icons-material/History';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
const Comments = () => {
    return (
        <Paper sx={{ padding: 3,marginY:1 }} style={{ border: "0.01rem solid #d6d6d6",display:'flex',flexDirection:'column',gap:'0.8rem' }}>
           <div className='maincus-comment-header'>
            <div className='cus-comment-header' style={{borderBottom:'2px solid black'}}>
                <IconButton className='cus-comment-icon'>
                    <ForumIcon />
                </IconButton>
                <Typography variant="h6" sx={{fontSize:'17px'}}>Comments</Typography>
            <p>04</p>
            </div>

            <div className='cus-comment-header'>
                <IconButton className='cus-comment-icon'>
                    <FormatListBulletedIcon />
                </IconButton>
                <Typography variant="h6" sx={{fontSize:'17px'}}>Tasks</Typography>
            <p style={{backgroundColor:'rgb(192, 192, 192)'}}><AssignmentIndIcon style={{fontSize:'15px'}}/></p>
            </div>

            <div className='cus-comment-header'>
                <IconButton className='cus-comment-icon'>
                    <HistoryIcon />
                </IconButton>
                <Typography variant="h6" sx={{fontSize:'17px'}}>Revision history</Typography>
            {/* <p>04</p> */}
            </div>
           

            </div>
           
            {/* <Typography variant="h6">Comments</Typography> */}
            {/* <Divider sx={{ marginY: 2 }} /> */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                {/* <div > */}
                <ImageListItem style={{ height: "45px", width: "45px",borderRadius:'100%',overflow:'hidden' }}>
                    <img
                        // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`https://images.unsplash.com/photo-1549388604-817d15aa0110?w=248&fit=crop&auto=format`}
                        alt={"bed"}
                        loading="lazy"
                    />
                </ImageListItem>
                <textarea
                    fullWidth
                    multiline
                    rows={1}
                    cols={130}
                    placeholder="Press ctrl + enter to send comment"
                    variant="outlined"
                    style={{padding:'1rem'}}
                />

                {/* </div> */}
                <div>
                    <Button variant="outline" style={{color:'rgb(108, 106, 130)'}} fullWidth>Save</Button>

                </div>

            </div>

        </Paper>
    );
};

export default Comments;
