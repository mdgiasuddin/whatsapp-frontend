import {CREATE_GROUP_CHAT, CREATE_SINGLE_CHAT, GET_USERS_CHAT} from "./ActionType";

const initialValue = {
    userChats: [],
    singleChat: null,
    groupChat: null,
}

export const chatReducer = (store = initialValue, {type, payload}) => {
    if (type === CREATE_SINGLE_CHAT) {
        return {...store, singleChat: payload}
    } else if (type === CREATE_GROUP_CHAT) {
        return {...store, groupChat: payload}
    } else if (type === GET_USERS_CHAT) {
        return {...store, userChats: payload}
    }

    return store;
}