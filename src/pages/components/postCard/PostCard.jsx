import { Avatar, Card, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import CommentIcon from '@mui/icons-material/Comment';
import React from "react";
import { red } from "@mui/material/colors";
import penguinImage from '../../../img/penguins.jpg';

const PostCard = () => {
    return (
        <Card className="">
            <CardHeader
            avatar={<Avatar sx={{ bgcolor: red[500] }} aria-label="post">
                S
            </Avatar>}
            action={
                <IconButton aria-label="settings">
                    <MoreVertIcon/>
                </IconButton>
            }
            title="Post of a certain person"
            subheader="January 1st, 2024"
            />
            <CardMedia
            component="img"
            height="194"
            image={penguinImage}
            alt="Penguins on the ice"
            />
            <CardContent>
                <Typography variant="body2" color={"black"}>
                    This is my post about some penguins looking at the camera
                </Typography>
            </CardContent>
            <div className="flex justify-between">
            <div>
                    <IconButton aria-label="add-to-favorites">
{true ? <FavoriteIcon/> : <FavoriteBorderIcon/>}
                    </IconButton>
                    <IconButton aria-label="share">
                    <ShareIcon/>
                    </IconButton>
                    <IconButton aria-label="comments">
                        <CommentIcon/>
                    </IconButton>
                </div>
                <div>
                    <IconButton className=" self-end">
{true ? <BookmarkIcon/> : <BookmarkBorderIcon/>}

                    </IconButton>
                </div>
            </div>
            
            
        </Card>
        
    )
}

export default PostCard;