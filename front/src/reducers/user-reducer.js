import {
    USER_CREATE_REQUEST,
    USER_CREATE_SUCCESS,
    USER_CREATE_FAIL,
    USER_PROFILE_REQUEST,
    USER_PROFILE_SUCCESS,
    USER_PROFILE_FAIL,
    USER_ADDRESS_REQUEST,
    USER_ADDRESS_SUCCESS,
    USER_ADDRESS_FAIL,

} from "./../constants/user-constants"

export const createUserReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case USER_CREATE_REQUEST: return { reduxProduct: [], isLoading: true };
        case USER_CREATE_SUCCESS: return { reduxProduct: payload, isLoading: false };
        case USER_CREATE_FAIL: return { reduxProductError: payload, isLoading: false };

        default: return state;
    }
}

export const userProfileReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case USER_PROFILE_REQUEST:
            return { isLoading: true };
        case USER_PROFILE_SUCCESS:
            return { isLoading: false, profile: payload };
        case USER_PROFILE_FAIL:
            return { isLoading: false, profileError: payload };
        default:
            return state;
    }
}


export const userAddressReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case USER_ADDRESS_REQUEST:
            return { isLoading: true };
        case USER_ADDRESS_SUCCESS:
            return { isLoading: false, address: payload };
        case USER_ADDRESS_FAIL:
            return { isLoading: false, addressError: payload };
        default:
            return state;
    }
}