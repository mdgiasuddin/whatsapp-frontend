import {SEARCH_USER, SIGN_IN, SIGNUP, UPDATE_USER, USER_PROFILE} from "./ActionType";

const initialValue = {
    signup: null,
    signIn: null,
    searchedUsers: [],
    userProfile: null
}

export const authReducer = (store = initialValue, {type, payload}) => {
    if (type === SIGNUP) {
        return {...store, signup: payload}
    } else if (type === SIGN_IN) {
        return {...store, signIn: payload}
    } else if (type === USER_PROFILE) {
        return {...store, userProfile: payload}
    } else if (type === SEARCH_USER) {
        return {...store, searchedUsers: payload}
    } else if (type === UPDATE_USER) {
        return {...store, updateUser: payload}
    }

    return store;
}