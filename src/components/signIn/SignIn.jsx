import React, {useEffect, useState} from "react";
import {Alert, Button, Snackbar} from "@mui/material";
import {useNavigate} from "react-router-dom";
import {green} from "@mui/material/colors";
import {signIn, userProfile} from "../../redux/auth/Action";
import {useDispatch, useSelector} from "react-redux";

const SignIn = () => {
    const navigate = useNavigate();
    const [inputData, setInputData] = useState({email: '', password: ''});
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const dispatch = useDispatch();
    const {auth} = useSelector(store => store);
    const jwt = localStorage.getItem('jwt');


    const handleSignIn = (e) => {
        e.preventDefault();
        console.log('handle submit', inputData);
        dispatch(signIn(inputData));
        setOpenSnackbar(true);
    }

    const handleChange = (e) => {
        const {name, value} = e.target;
        setInputData((values) => ({...values, [name]: value}));
    }

    const handleSnackbarClose = () => {
        setOpenSnackbar(false);
    }

    useEffect(() => {
        if (jwt) {
            dispatch(userProfile(jwt));
        }
    }, [jwt])

    useEffect(() => {
        if (auth.userProfile?.fullName) {
            navigate('/')
        }
    }, [auth.userProfile])

    return (
        <div>
            <div className='flex justify-center h-screen items-center'>
                <div className='w-[30%] p-10 shadow-md bg-white'>
                    <form onSubmit={handleSignIn} className='space-y-5'>
                        <div>
                            <p className='mb-2'>Email</p>
                            <input
                                placeholder='Enter your Email'
                                name='email'
                                value={inputData.email}
                                onChange={handleChange}
                                type='text' className='py-2 outline outline-green-600 w-full rounded-md border'
                            />
                        </div>
                        <div>
                            <p className='mb-2'>Password</p>
                            <input
                                placeholder='Enter your Password'
                                name='password'
                                value={inputData.password}
                                onChange={handleChange}
                                type='password' className='py-2 outline outline-green-600 w-full rounded-md border'
                            />
                        </div>

                        <div>
                            <Button type='submit' sx={{bgcolor: green[700], padding: '.5rem 0rem'}}
                                    className='w-full bg-green-600' variant='contained'>Sign In</Button>
                        </div>

                    </form>

                    <div className='flex space-x-3 items-center mt-5'>
                        <p className='m-0'>Don't have any account?</p>
                        <Button onClick={() => navigate('/signup')}>Signup</Button>
                    </div>
                </div>
            </div>

            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
                <Alert
                    onClose={handleSnackbarClose}
                    severity="success"
                    sx={{width: '100%'}}
                >
                    You are successfully signed in!
                </Alert>
            </Snackbar>
        </div>
    )
}

export default SignIn;