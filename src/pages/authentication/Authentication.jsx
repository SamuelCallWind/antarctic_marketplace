import { Card, Grid } from '@mui/material';
import wallpaperPinguins from '../../img/background_authentication.png';
import Login from './Login';
import React from 'react';
import Register from './Register';
import { Route, Routes } from 'react-router-dom';
import MiddleContent from '../components/middleContent/MiddleContent';
import Reels from "../components/reels/Reels";
import CreateReelsForm from '../components/reels/CreateReelsForm';
import Profile from '../profile/Profile';
import Messages from '../message/Message';


const Authentication = () => {
    return (
        <div>
            <Grid container
            alignItems="center">
                <Grid 
                className='h-screen overflow-hidden bg-cover bg-center bg-no-repeat' 
                item xs={7}
                style={{ backgroundImage: `url(${wallpaperPinguins})`}}
                >
                </Grid>
                <Grid item xs={5}
                justifyContent="center"
                >

                    <div className='flex flex-col justify-center h-full'>
                        <Card className='card p-8 max-w-600 w-[70%] center' style={{alignSelf: "center"}}>

                            <div className='flex flex-col items-center mb-8 space-y-1 p-1 w-full gap-3'>
                                <h1 className='loginTitle'>Antarctic Social</h1>
                                <p className='text-center mb-5'>Connect with others and share your story. The iceberg is waiting for you!</p>
                                
<Routes>
    <Route path='/' element={<Login />}></Route>  
    <Route path='/login' element={<Login />}></Route>
    <Route path='/register' element={<Register />}></Route>
</Routes>

                            </div>

                        </Card>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Authentication