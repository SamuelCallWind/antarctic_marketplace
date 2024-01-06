import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import * as Yup from 'yup';


const initialValues={firstName: "", lastName: "", email: "", password: "", gender: ""};
const validationSchema=Yup.object({firstName: Yup.string()
    .required("You need to enter your first name")
    .min(2, "Your name must contain at least 2 characters"),
    lastName: Yup.string()
    .required("You need to enter your first name")
    .min(1, "Your name must contain at least 1 characters"),
    email: Yup.string()
    .email("Invalid email")
    .required("An email is required"),
    password: Yup.string()
    .min(6, "Password must contain at least 6 characters")
    .required("A password is required"),
});

const handleChange = (data) => {
    return data;
}

const Register = () => {
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
                    name="firstName"
                    placeholder="First Name"
                    type="text"
                    variant="outlined"
                    >

                    </Field>
                </div>    
            </div>

            <div className='space-y-5'>
                <div>
                    <Field
                    as={TextField}
                    name="lastName"
                    placeholder="Last Name"
                    type="text"
                    variant="outlined"
                    >

                    </Field>
                </div>    
            </div>
            
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

            <div className='space-y-5'>
                <div>
                    <FormLabel id="gender">
                        gender
                        <RadioGroup
                        aria-label="gender"
                        name="gender"
                        onChange={handleChange}
                        >
                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                        
                        <ErrorMessage name="gender" component="div" className='text-red-500'></ErrorMessage>
                        
                        </RadioGroup>
                    </FormLabel>
                </div>    
            </div>

            <Button 
            sx={{padding: ".5rem 0rem"}} 
            fullWidth 
            type='submit' 
            variant='contained'
            color='primary'
            >
                Register
            </Button>
            <p className=' text-center w-full'>Already have an account? <a href="">Login here</a></p>

        </Form>
        </Formik>
    )
}

export default Register;