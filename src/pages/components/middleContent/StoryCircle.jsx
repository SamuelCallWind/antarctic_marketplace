import { Avatar, Card, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";

const StoryCircle
 = () => {
    return (
        <div className="containerTopAvatar">
            <Avatar sx={{width: "5rem", height: "5rem"}} 
            alt="" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=""/>
            <p className="">user1</p>
        </div>
    )
}

export default StoryCircle;