import {BASE_API_URL} from "../../config/Api";
import {CREATE_GROUP_CHAT, CREATE_SINGLE_CHAT, GET_USERS_CHAT} from "./ActionType";

export const createChat = (data, token) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/chats/single`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        const responseData = await res.json();
        console.log('Single Chat', responseData);

        dispatch({type: CREATE_SINGLE_CHAT, payload: responseData})
    } catch (error) {
        console.log('Single Chat error', error);
    }
}

export const createGroupChat = (data, token) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/chats/group`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        const responseData = await res.json();
        console.log('Group Chat', responseData);

        dispatch({type: CREATE_GROUP_CHAT, payload: responseData})
    } catch (error) {
        console.log('Group Chat error', error);
    }
}

export const getUsersChats = (token) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/chats/user`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const responseData = await res.json();
        console.log('Get Users Chat', responseData);

        dispatch({type: GET_USERS_CHAT, payload: responseData})
    } catch (error) {
        console.log('Get Users Chat', error);
    }
}