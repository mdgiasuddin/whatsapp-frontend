import {BASE_API_URL} from "../../config/Api";
import {SEARCH_USER, SIGN_IN, SIGNUP, UPDATE_USER, USER_PROFILE} from "./ActionType";

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
        dispatch({type: SIGN_IN, payload: responseData})
    } catch (error) {
        console.log('SignIn error', error);
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

export const searchUser = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/users/search/${data.keyword}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.token}`
            },
        })
        const responseData = await res.json();
        console.log('Search user', responseData);
        dispatch({type: SEARCH_USER, payload: responseData})
    } catch (error) {
        console.log('Search user error', error);
    }
}

export const updateUser = (data) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/users`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${data.token}`
            },
        })
        const responseData = await res.json();
        console.log('Update user', responseData);
        dispatch({type: UPDATE_USER, payload: responseData})
    } catch (error) {
        console.log('Update user error', error);
    }
}