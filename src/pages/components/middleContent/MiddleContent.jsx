import { Avatar, Card, Stack } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import StoryCircle from "./StoryCircle";

const MiddleContent = () => {
    const story = [11, 1, 1, 1, 1];
    return (
        <div className=" w-full">
            <section className="pt-1">
                <Card>
                    <Stack direction="row" spacing={2} className="w-full h-full flex items-center justify-evenly text-center">
                    <div className="containerTopAvatar">
                            <Avatar sx={{width: "5rem", height: "5rem"}} alt="" src="" className="">
                                <AddIcon sx={{height: "3rem", width: "3rem"}}/>
                            </Avatar>
                            <p>New</p>                    
                    </div>
{story.map(item => <StoryCircle/>)}
                    </Stack>  
                </Card>
            </section>
            <section className="p-5 mt-5">
                <div className="flex justify-between">
                    <Avatar/>
                    <input className="outline-none bg-white w-[90%] rounded-full px-5 bg-transparent border-blue-300 focus:border-2" 
                    type="text" 
                    placeholder="Write what's on your mind..."
                    />
                </div>
            </section>
            
        </div>
                
    )
}

export default MiddleContent;