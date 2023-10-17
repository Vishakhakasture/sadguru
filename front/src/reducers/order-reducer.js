import { PLACE_ORDER_REQUEST, PLACE_ORDER_SUCCESS, PLACE_ORDER_FAIL, ORDER_HISTORY_REQUEST, ORDER_HISTORY_SUCCESS, ORDER_HISTORY_FAIL } from './../constants/order-constants';

export const placeOrderReducer = (state = {}, { type, payload }) => {
    switch (type) {
        case PLACE_ORDER_REQUEST: return { reduxProduct: [], isLoading: true };
        case PLACE_ORDER_SUCCESS: return { reduxProduct: payload, isLoading: false };
        case PLACE_ORDER_FAIL: return { reduxProductError: payload, isLoading: false };

        default: return state;
    }
}


export const getOrderHistoryReducer = (state = { orders: [] }, { type, payload }) => {
    switch (type) {
        case ORDER_HISTORY_REQUEST: return { ...state, isLoading: true };
        case ORDER_HISTORY_SUCCESS: return { orders: payload, isLoading: false };
        case ORDER_HISTORY_FAIL: return { ordersError: payload, isLoading: true };
        default: return state;
    }
}