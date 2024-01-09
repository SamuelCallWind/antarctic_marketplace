import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';
import { Route, Routes, useNavigate } from 'react-router-dom';
import MiddleContent from '../components/middleContent/MiddleContent';
import Reels from "../components/reels/Reels";
import CreateReelsForm from '../components/reels/CreateReelsForm';
import Profile from '../profile/Profile';
import Messages from '../message/Message';


const initialValues={email: "", password: ""};
const validationSchema=Yup.object({email: Yup.string()
    .email("Invalid email")
    .required("An email is required"),
password: Yup.string()
    .min(6, "Password must contain at least 6 characters")
    .required("A password is required") 
});

const Login = () => {
    const [formValue, setFormValue]=useState();
    const navigate = useNavigate();

    const handleSubmit = (values) => {
        console.log("handle submit", values);
    }

    return (<div>
        
            <Formik
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            initialValues={initialValues}>
        
            <Form className="space-y-5">
                <div className='space-y-5'>
        
                    <div>
                        <Field
                        as={TextField}
                        name="email"
                        placeholder="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        />
                        <ErrorMessage
                        name="email"
                        component="div"
                        className="text-red-500" />
                    </div>
                </div>
                <div className='space-y-5'>
        
                    <div>
                        <Field
                        as={TextField}
                        name="password"
                        placeholder="password"
                        type="password"
                        variant="outlined"
                        fullWidth
                        />
                        <ErrorMessage
                        name="password"
                        component="div"
                        className="text-red-500" />
                    </div>
                </div>
                <Button
                sx={{padding: ".5rem 0rem"}}
                fullWidth type='submit'
                variant='contained'
                color='primary'
                >
                    Login
                </Button>
        
            </Form>
            </Formik>

        <div className='flex flex-col text-center mt-5 justify-center'>
            <p>Don't have an account yet?</p>
            <Button onClick={() => navigate("/register")}>Register</Button>
        </div>
        <Routes>
            <Route path="/" element={<MiddleContent />}></Route>
            <Route path="/reels" element={<Reels />}></Route>
            <Route path="/createReelsForm" element={<CreateReelsForm />}></Route>
            <Route path="/profile/:id" element={<Profile />}></Route>
            <Route path="/messages" element={<Messages />}></Route>
        </Routes>
    </div>
    )
}

export default Login
