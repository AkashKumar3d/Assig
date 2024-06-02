import React from 'react';
import { Paper, Typography, Divider, TextField, Button, ImageListItem } from '@mui/material';

const Comments = () => {
    return (
        <Paper sx={{ padding: 2 }} style={{ border: "0.2px solid gray" }}>

            <Typography variant="h6">Comments</Typography>
            <Divider sx={{ marginY: 2 }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent:"space-around" }}>
                {/* <div > */}
                <ImageListItem style={{height:"45px", width:"45px"}}>
                    <img
                        // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`https://images.unsplash.com/photo-1549388604-817d15aa0110?w=248&fit=crop&auto=format`}
                        alt={"bed"}
                        loading="lazy"
                    />
                </ImageListItem>
                <TextField
                    fullWidth
                    multiline
                    rows={2}
                    placeholder="Press ctrl + enter to send comment"
                    variant="outlined"
                    sx={{ marginBottom: 2 }}
                />

                {/* </div> */}
                <div>
                    <Button variant="contained" fullWidth>Save</Button>

                </div>

            </div>

        </Paper>
    );
};

export default Comments;
