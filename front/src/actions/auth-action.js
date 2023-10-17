import axios from "axios"
import {
    USER_LOGIN_REQUEST,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    USER_LOGOUT,
} from "./../constants/auth-constants"

export const userLoginAction = (loginCredentials) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/auth/login`, loginCredentials)
        dispatch({ type: USER_LOGIN_SUCCESS, payload: { info: data.result, token: data.token } })

        const x = getState().user.userInfo;
        localStorage.setItem("user", JSON.stringify(x))

    } catch (error) {
        dispatch({ type: USER_LOGIN_FAIL, payload: error })
    }
}

export const userLogoutAction = () => (dispatch) => {
    dispatch({ type: USER_LOGOUT })
    localStorage.removeItem("user")
}