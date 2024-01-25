import { Avatar, Button, CardHeader, IconButton } from "@mui/material";
import { blue, red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert"
import React from "react";

const PopularUserCard = () => {
    return (
        <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: blue[300] }} aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <Button size="small">Follow</Button>
        }
        title="Pinguin name"
        subheader="@popularUser"
      />
    );
}

export default PopularUserCard;