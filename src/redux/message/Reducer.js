import {GET_CHAT_MESSAGES, SEND_MESSAGE} from "./ActionType";

const initialValue = {
    newMessage: null,
    chatMessages: []
}

export const messageReducer = (store = initialValue, {type, payload}) => {
    if (type === SEND_MESSAGE) {
        return {...store, newMessage: payload}
    } else if (type === GET_CHAT_MESSAGES) {
        return {...store, chatMessages: payload}
    }

    return store;
}