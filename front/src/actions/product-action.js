import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL,
} from "../constants/product-constants"
import axios from "axios"

export const getAllProductAction = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PRODUCT_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/products`)
        // console.log(data.result);
        dispatch({ type: ALL_PRODUCT_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: ALL_PRODUCT_FAIL, payload: error })
    }
}

export const getSingleProductAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: SINGLE_PRODUCT_REQUEST })
        const { data } = await axios.get(`${process.env.REACT_APP_URL}/api/products/${id}`)
        console.log(data.result);
        dispatch({ type: SINGLE_PRODUCT_SUCCESS, payload: data.result })
    } catch (error) {
        dispatch({ type: SINGLE_PRODUCT_FAIL, payload: error })
    }
}