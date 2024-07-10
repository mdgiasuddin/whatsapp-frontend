import {GET_CHAT_MESSAGES, SEND_MESSAGE} from "./ActionType";

const initialValue = {
    message: null,
    chatMessages: []
}

export const messageReducer = (store = initialValue, {type, payload}) => {
    if (type === SEND_MESSAGE) {
        return {...store, message: payload}
    } else if (type === GET_CHAT_MESSAGES) {
        return {...store, chatMessages: payload}
    }

    return store;
}