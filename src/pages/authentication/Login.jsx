import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button } from '@mui/material';
import * as Yup from 'yup';


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

    const handleSubmit = (values) => {
        console.log("handle submit", values);
    }

    return (
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
            <p className=' text-center w-full'>Don't have an account yet? <a href="">Create one here</a></p>
        </Form>
        </Formik>
    )
}

export default Login


/* 
<input type="text" className=' w-full w-10/12' placeholder='Email'/>
<input type="text" className=' w-full w-10/12' placeholder='Password'/>
                                
<button className='login bg-cyan-300 text-black rounded w-10/12'>Login</button>                            
<p className=' mt-2'>Don't have an account? <a href="">REGISTER</a></p>
<button className='forgotPassword w-10/12 border-solid border-2'>Forgot your password ?</button>
*/