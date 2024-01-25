import React from "react";
import PopularUserCard from "./popularUserCard";
import SearchUser from "../searchUser/SearchUser";
import { Card } from "@mui/material";

const HomeRight = () => {
    const popularUsers = [1, 2, 3, 4];
    return (
        <Card>
            <div className="pr-5 content-center">
            <SearchUser/>

            <div className="flex justify-between py-5 items-center">
                <p className="font-semibold opacity-70">Suggested for you</p>
                <p className="text-xs font-semibold opacitr-80 cursor-pointer">View all</p>
            </div>

            <div className="">
{popularUsers.map((element) => <PopularUserCard key={popularUsers.indexOf(element)}/>)}
            </div>
            
            </div>
        </Card>
        
    )
}

export default HomeRight;