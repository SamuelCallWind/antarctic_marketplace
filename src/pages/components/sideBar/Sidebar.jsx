import React from "react";
import { navigationMenu } from "./SidebarNavigation";
import { Avatar, Divider } from "@mui/material";
import avatarSam from '../../../img/avatar_sam_callwind.png'

const Sidebar = () => {
    return (
        <div className="card h-screen
         text-black
         flex 
         flex-col 
         justify-between 
         py-5">
            <div className="space-y-8 pl-5">
                <div className="">

                    <span className="logo font-bold">Antarctic Social</span>

                </div>

                <div className="space-y-8">
{navigationMenu.map((item) => <div className="cursor-pointer flex flex-row items-center">
    {item.icon}
    <p className="text-xl ml-2">{item.name}</p>
</div>)}

                </div>
            </div>
            <div>
                <Divider/>
                <div className=" mt-2 flex justify-between items-center">
                    <div className="flex items-center space-x-3">
                        <Avatar src={avatarSam}></Avatar>
                        <div>
                            <p>This is a test</p>
                            <p>another test</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;