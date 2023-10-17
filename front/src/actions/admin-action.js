import axios from "axios";
import { ADMIN_ORDER_HISTORY_REQUEST, ADMIN_ORDER_HISTORY_SUCCESS, ADMIN_ORDER_HISTORY_FAIL } from "../constants/order-constants";


export const adminAction = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ADMIN_ORDER_HISTORY_REQUEST })
        const config = {
            headers: {
                Authorization: getState().user.userInfo.token
            }
        }
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/orders/admin-orders`, config)
        dispatch({ type: ADMIN_ORDER_HISTORY_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: ADMIN_ORDER_HISTORY_FAIL, payload: error })
    }
}