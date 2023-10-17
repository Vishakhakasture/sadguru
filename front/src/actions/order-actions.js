import { PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL, ORDER_HISTORY_REQUEST, ORDER_HISTORY_FAIL, ORDER_HISTORY_SUCCESS } from "../constants/order-constants"
import axios from 'axios';

export const placeOrderAction = () => async (dispatch) => {
    try {
        dispatch({ type: PLACE_ORDER_REQUEST })
        const { data } = await axios.post(`${process.env.REACT_APP_URL}/api/orders`)
        // console.log(data.result);
        dispatch({ type: PLACE_ORDER_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: PLACE_ORDER_FAIL, payload: error })
    }
}


export const getOrderHistoryAction = () => async (dispatch) => {
    try {
        dispatch({ type: ORDER_HISTORY_REQUEST })
        const { token } = JSON.parse(localStorage.getItem("user"))
        const config = {
            headers: {
                authorization: token
            }
        }
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/orders`, config)
        console.log(config);
        dispatch({ type: ORDER_HISTORY_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: ORDER_HISTORY_FAIL, payload: error })

    }
}