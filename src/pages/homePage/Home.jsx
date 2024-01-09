import React from "react";
import Sidebar from "../components/sideBar/sidebar";
import { Grid } from "@mui/material";
import { Route, Routes, useLocation, useParams } from "react-router-dom";
import Messages from "../message/Message";
import CreateReelsForm from "../components/reels/CreateReelsForm";
import Reels from "../components/reels/Reels";
import MiddleContent from "../components/middleContent/MiddleContent";
import Profile from "../profile/Profile";



const Home = () => {
    const location = useLocation("");

    return (
        <div className="px-20">
            <Grid container spacing={0}>

                <Grid item xs={0} lg={3}>
                    <div className="sticky top-0">
                        <Sidebar />
                    </div>
                </Grid>

                
                <Grid item xs={12} lg={location.pathname === "/" ? 6 : 9} className="px-5 flex justify-center">
                    
                    <Routes>
                        <Route path="/" element={<MiddleContent />}></Route>
                        <Route path="/reels" element={<Reels />}></Route>
                        <Route path="/createReelsForm" element={<CreateReelsForm />}></Route>
                        <Route path="/profile/:id" element={<Profile />}></Route>
                        <Route path="/messages" element={<Messages />}></Route>

                    </Routes>

                </Grid>
                <Grid item xs={0} lg={3}>
                    {/* to implement */}
                </Grid>
            </Grid>
        </div>
    )
}

export default Home;