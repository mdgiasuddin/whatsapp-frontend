import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import {Alert, Button, Snackbar} from "@mui/material";
import {green} from "@mui/material/colors";

const Signup = () => {
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({fullName: '', email: '', password: ''});

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('handle submit');
        setOpenSnackbar(true);
    }

    const handleChange = () => {
    }

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    }

    return (
        <div>
            <div className='flex justify-center h-screen items-center'>
                <div className='w-[30%] p-10 shadow-md bg-white'>
                    <form onSubmit={handleSubmit} className='space-y-5'>
                        <div>
                            <p className='mb-2'>Full Name</p>
                            <input
                                className='py-2 outline outline-green-600 w-full rounded-md border'
                                type='text'
                                placeholder='Enter full name'
                                name='fullName'
                                onChange={(e) => handleChange(e)}
                                value={inputData.fullName}
                            />
                        </div>

                        <div>
                            <p className='mb-2'>Email</p>
                            <input
                                className='py-2 outline outline-green-600 w-full rounded-md border'
                                type='text'
                                placeholder='Enter email'
                                name='email'
                                onChange={(e) => handleChange(e)}
                                value={inputData.email}
                            />
                        </div>

                        <div>
                            <p className='mb-2'>Password</p>
                            <input
                                className='py-2 outline outline-green-600 w-full rounded-md border'
                                type='password'
                                placeholder='Enter password'
                                name='password'
                                onChange={(e) => handleChange(e)}
                                value={inputData.password}
                            />
                        </div>

                        <div>
                            <Button type='submit' sx={{bgcolor: green[700], padding: '.5rem 0rem'}}
                                    className='w-full bg-green-600' variant='contained'>Signup</Button>
                        </div>
                    </form>

                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Already have account?</p>
                        <Button onClick={() => navigate('/signIn')}>Sign In</Button>
                    </div>

                </div>

                <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                    <Alert
                        onClose={handleSnackbarClose}
                        severity="success"
                        sx={{width: '100%'}}
                    >
                        Your account successfully created!
                    </Alert>
                </Snackbar>
            </div>
        </div>
    )
}

export default Signup;