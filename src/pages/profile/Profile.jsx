import React from "react";
import { useParams } from 'react-router-dom';
import mountainImage from '../../img/mountain_landscape.jpg';
import avatarImage from '../../img/avatar_sam_callwind.png';
import { Avatar, Button } from "@mui/material";

const Profile = () => {

    const {id} = useParams();

    return (
        <div className="py-10 w-[70%]">

            <div className="rounded-md">

                <div className="h-[15rem]">
                    <img className=" w-full h-full rounded-t-md" alt="mountains" src={mountainImage}/>

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

                </div>
            </div>
        </div>
    )
}

export default Profile;