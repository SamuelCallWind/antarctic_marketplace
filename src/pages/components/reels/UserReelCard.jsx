import React from "react";
import parisVideo from '../../../videos/video_paris.mp4'
const UserReelCard = () => {
    return (
        <div className="w-[20rem] px-2">
            <video controls className=" w-full h-full" src={parisVideo}/>
        </div>
    ) 
}

export default UserReelCard;