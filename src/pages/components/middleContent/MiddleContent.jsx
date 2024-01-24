import { Avatar, Card, IconButton, Stack } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';
import VideocamIcon from '@mui/icons-material/Videocam';
import ArticleIcon from '@mui/icons-material/Article';
import AddIcon from '@mui/icons-material/Add';
import React from "react";
import StoryCircle from "./StoryCircle";

const MiddleContent = () => {
    const story = [11, 1, 1, 1, 1];
    const handleOpenCreatePostModal = () => {
        console.log('open post modal');
    }
    return (
        <div className=" w-full">
            <section className="pt-2">
                <Card>
                    <Stack direction="row" spacing={2} className="h-full flex items-center justify-evenly text-center">
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
            <section className=" mt-5 w-full">
                <div className="flex justify-between">
                    <Card className=" w-full justify-between p-5">
                        <div className="flex justify-evenly">
                            <Avatar/>
                            <input
                            readOnly
                            className="outline-none bg-slate-200 w-[90%] rounded-full px-5 bg-transparent border-blue-300 focus:border-2" 
                            type="text" 
                            placeholder="Write what's on your mind..."
                            />
                        </div>
                        <div className="flex justify-center space-x-9 mt-5">
                        <div className="flex items-center">
                            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
                                <ImageIcon/>
                            </IconButton>

                            <span>media</span>
                        </div>
                        <div className="flex items-center">
                            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
                                <VideocamIcon/>
                            </IconButton>

                            <span>video</span>
                        </div>    
                        <div className="flex items-center">
                            <IconButton color="primary" onClick={handleOpenCreatePostModal}>
                                <ArticleIcon/>
                            </IconButton>
                            <span>article</span>
                        </div>                    
                    </div>
                    </Card>
                    
                </div>
            </section>
            
        </div>
                
    )
}

export default MiddleContent;