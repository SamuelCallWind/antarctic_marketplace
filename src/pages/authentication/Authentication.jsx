import { Card, Grid } from '@mui/material';
import wallpaperPinguins from '../../img/background_authentication.png';
import Login from './Login';
import React from 'react';


const Authentication = () => {
    return (
        <div>
            <Grid container>
                <Grid 
                className='h-screen overflow-hidden bg-cover bg-center bg-no-repeat' 
                item xs={7}
                style={{ backgroundImage: `url(${wallpaperPinguins})`}}
                >
                </Grid>
                <Grid xs={5}>

                    <div className='flex flex-col justify-center h-full'>
                        <Card className='card p-8 max-w-600 w-[70%]'>

                            <div className='flex flex-col items-center mb-8 space-y-1 p-1 w-full gap-3'>
                                <h1 className='loginTitle'>Antarctic Social</h1>
                                <p className='text-center mb-5'>Connect with others and share your story. The iceberg is waiting for you</p>
                            
                                <input type="text" className=' w-full w-10/12' placeholder='Email'/>
                                <input type="text" className=' w-full w-10/12' placeholder='Password'/>
                                
                                <Login>

                                </Login>
                            </div>

                        </Card>

                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default Authentication