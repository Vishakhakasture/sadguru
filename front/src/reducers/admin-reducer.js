import { ADMIN_ORDER_HISTORY_REQUEST, ADMIN_ORDER_HISTORY_SUCCESS, ADMIN_ORDER_HISTORY_FAIL } from "../constants/order-constants";
export const getAllAdminReducer = (state = { orderHistory: [] }, { type, payload }) => {
    switch (type) {
        case ADMIN_ORDER_HISTORY_REQUEST:
            return { ...state, isLoading: true }
        case ADMIN_ORDER_HISTORY_SUCCESS:
            return { orderHistory: payload, isLoading: false }
        case ADMIN_ORDER_HISTORY_FAIL:
            return { orderHistoryError: payload, isLoading: false }
        default: return state;
    }
}