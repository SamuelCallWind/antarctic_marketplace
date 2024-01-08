import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Button, FormLabel, RadioGroup, FormControlLabel, Radio, Checkbox } from '@mui/material';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


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



const Register = () => {
    const [formValue, setFormValue]=useState();
    const [gender, setGender]=useState('');
    const navigate = useNavigate();

    const handleChange = (event) => {
        setGender(event.target.value);
    }

    const handleSubmit = (values) => {
        values.gender = gender;
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
                        Gender
                        <RadioGroup
                        aria-label="gender"
                        name="gender"
                        onChange={handleChange}
                        required
                        row
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
            <div className='flex text-center'>
                <p>Already have an account? <Button onClick={() => navigate("/login")}>Login here</Button></p>
            </div>

        </Form>
        </Formik>
    )
}

export default Register;