import React from "react";
import { useParams } from 'react-router-dom';
import mountainImage from '../../img/mountain_landscape.jpg';
import avatarImage from '../../img/avatar_sam_callwind.png';
import { Avatar, Box, Button, Card, Tab, Tabs } from "@mui/material";
import PostCard from "../components/postCard/PostCard";
import UserReelCard from "../components/reels/UserReelCard";

const Profile = () => {

    const {id} = useParams();
    const posts = ['test', 'test', 'test', 'test']
    const reels = [1, 2, 3, 4, 5];
    
    const [value, setValue] = React.useState('posts');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    }

    return (
        <Card className="py-10 w-[70%]">

            <div id="topPartProfileBio" className="rounded-md">

                <div className="h-[15rem]">
                    <img className=" w-full h-full object-cover rounded-t-md" alt="mountains" src={mountainImage}/>

                </div>
                <div className="px-5 flex justify-between items-start mt-5 h-[5rem]">
                    <Avatar 
                    className="transform -translate-y-24"
                    sx={{width: '10rem', height: '10rem'}}
                    src={avatarImage}
                    />
                    {true ? <Button sx={{borderRadius: '20px'}} variant="outlined">Edit Profile</Button> : <Button variant="outlined">Follow</Button>}                    
                    
                </div>
                <div className="p-5">
                    <div>
                        <h1 className="py-1 font-bold text-xl">Samuel Call-wind</h1>
                        <p>@samCallWind</p>
                    </div>

                    <div className="flex gap-5 items-center py-3">

                        <span>41 post</span>
                        <span>35 follows</span>
                        <span>50 followings</span>

                    </div>
                    <div>This is my bio</div>
                </div>
            </div>
            <Box sx={{ width: '100%', borderBottom: 1, borderColor: "divider" }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label="wrapped label tabs example"
                >
                  <Tab value="posts"label="posts"/>
                  <Tab value="reels" label="reels" />
                  <Tab value="saved" label="saved" />
                  <Tab value="repost" label="repost" />
                </Tabs>
            </Box>
            <div className="flex justify-center">

                {value === 'posts' ? <div className="space-y-5 w-[70%] mt-5">
                    {posts.map((element) => <div className="border rounded-md border-slate-100">
                        <PostCard/>
                    </div>)}

                </div>: value === 'reels' ? <div className="flex flex-wrap justify-center mt-2 gap-2">
                    {reels.map((element) => <UserReelCard className=" w-[50%]"/>)}
                </div> : ("")}

            </div>
        </Card>
    )
}

export default Profile;