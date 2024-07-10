import {BASE_API_URL} from "../../config/Api";
import {GET_CHAT_MESSAGES, SEND_MESSAGE} from "./ActionType";

export const sendMessage = (data, token) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/messages/send`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
            body: JSON.stringify(data)
        })

        const responseData = await res.json();
        console.log('Send message', responseData);

        dispatch({type: SEND_MESSAGE, payload: responseData})
    } catch (error) {
        console.log('Send message error', error);
    }
}

export const getChatMessages = (chatId, token) => async (dispatch) => {
    try {
        const res = await fetch(`${BASE_API_URL}/api/messages/chat/${chatId}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            },
        })

        const responseData = await res.json();
        console.log('Chat messages', responseData);

        dispatch({type: GET_CHAT_MESSAGES, payload: responseData})
    } catch (error) {
        console.log('Chat messages', error);
    }
}