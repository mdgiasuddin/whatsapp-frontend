import {BASE_API_URL} from "../../config/Api";
import {LOGOUT, SEARCH_USER, SIGN_IN, SIGNUP, UPDATE_USER, USER_PROFILE} from "./ActionType";

export const signup = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/auth/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const responseData = await res.json();
        console.log('Signup', responseData);
        if (responseData.jwt) {
            localStorage.setItem('jwt', responseData.jwt);
        }

        dispatch({type: SIGNUP, payload: responseData})
    } catch (error) {
        console.log('Signup error', error);
    }
}

export const signIn = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/auth/signIn`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        const responseData = await res.json();
        console.log('SignIn', responseData);
        if (responseData.jwt) {
            localStorage.setItem('jwt', responseData.jwt);
        }
        dispatch({type: SIGN_IN, payload: responseData})
    } catch (error) {
        console.log('signIn error', error);
    }
}

export const userProfile = (token) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/users/profile`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const responseData = await res.json();
        console.log('User profile', responseData);
        dispatch({type: USER_PROFILE, payload: responseData})
    } catch (error) {
        console.log('User profile error', error);
    }
}

export const searchUser = (query, token) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/users/search/${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })
        const responseData = await res.json();
        console.log('Search user', responseData);
        dispatch({type: SEARCH_USER, payload: responseData})
    } catch (error) {
        console.log('Search user error', error);
    }
}

export const updateUser = (data, token) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/users`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })
        const responseData = await res.json();
        console.log('Update user', responseData);
        dispatch({type: UPDATE_USER, payload: responseData})
    } catch (error) {
        console.log('Update user error', error);
    }
}

export const logout = () => async (dispatch) => {
    localStorage.removeItem('jwt');
    dispatch({type: LOGOUT, payload: null});
    dispatch({type: USER_PROFILE, payload: null});
}