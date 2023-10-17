import { ADD_TO_CART, REMOVE_FROM_CART } from "../constants/cart-constants"
import { EMPTY_CART } from './../constants/cart-constants';

export const cartReducer = (state = { cartItem: [] }, { type, payload }) => {
    switch (type) {
        case ADD_TO_CART:
            const exist = state.cartItem.find(item => item._id === payload._id)
            if (exist) {
                return { cartItem: state.cartItem.map(item => item._id === exist._id ? payload : item) }
            } else {
                return { cartItem: [...state.cartItem, payload], isLoading: true };
            }
        case REMOVE_FROM_CART:
            return { cartItem: state.cartItem.filter((item) => item._id !== payload) };
        case EMPTY_CART:
            return { cartItem: [] }
        default: return state;
    }
}