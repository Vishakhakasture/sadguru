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
import axios from "axios"

export const userCreateAction = (newUser) => async (dispatch) => {
    try {
        dispatch({ type: USER_CREATE_REQUEST })
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/user/register`, newUser)
        dispatch({ type: USER_CREATE_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: USER_CREATE_FAIL, payload: error })
    }
}

export const userProfileAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_PROFILE_REQUEST })
        const config = {
            headers: {
                Authorization: getState().user.userInfo.token
            }
        }
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/user/profile`, config)
        dispatch({ type: USER_PROFILE_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: USER_PROFILE_FAIL, payload: error })
    }
}

export const userAddressAction = (formData) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_ADDRESS_REQUEST })
        const config = {
            headers: {
                Authorization: getState().user.userInfo.token
            }
        }
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/user/address`, formData, config)
        dispatch({ type: USER_ADDRESS_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: USER_ADDRESS_FAIL, payload: error })
    }
}