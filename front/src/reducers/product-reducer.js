import {
    ALL_PRODUCT_REQUEST,
    ALL_PRODUCT_SUCCESS,
    ALL_PRODUCT_FAIL,
    SINGLE_PRODUCT_REQUEST,
    SINGLE_PRODUCT_SUCCESS,
    SINGLE_PRODUCT_FAIL,
} from "../constants/product-constants"

export const getAllProductReducer = (state = { reduxProduct: [] }, { type, payload }) => {
    switch (type) {
        case ALL_PRODUCT_REQUEST: return { reduxProduct: [], isLoading: true };
        case ALL_PRODUCT_SUCCESS: return { reduxProduct: payload, isLoading: false };
        case ALL_PRODUCT_FAIL: return { reduxProductError: payload, isLoading: false };

        default: return state;
    }
}
export const getSinlgeProductReducer = (state = { reduxSingleProduct: {} }, { type, payload }) => {
    switch (type) {
        case SINGLE_PRODUCT_REQUEST: return { reduxSingleProduct: {}, isLoading: true };
        case SINGLE_PRODUCT_SUCCESS: return { reduxSingleProduct: payload, isLoading: false };
        case SINGLE_PRODUCT_FAIL: return { reduxSingleProductError: payload, isLoading: false };

        default: return state;
    }
}
