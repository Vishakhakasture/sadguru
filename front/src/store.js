/* The `import` statement is used to import the required modules. */
import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension"
import { getAllProductReducer, getSinlgeProductReducer } from './reducers/product-reducer';
import { cartReducer } from './reducers/cart-reducer';
import { userLoginReducer } from './reducers/auth-reducer';
import { createUserReducer, userProfileReducer } from './reducers/user-reducer';
import { getOrderHistoryReducer, placeOrderReducer } from './reducers/order-reducer';
import { getAllAdminReducer } from './reducers/admin-reducer';

/* Combining all the reducers into one. */
const rootReducer = combineReducers({
    product: getAllProductReducer,
    singleProduct: getSinlgeProductReducer,
    cart: cartReducer,
    user: userLoginReducer,
    newUser: createUserReducer,
    profile: userProfileReducer,
    order: placeOrderReducer,
    orders: getOrderHistoryReducer,
    adminOrders: getAllAdminReducer,
})

/* This is a way to get the cart items from local storage. */
const cartFromLocalStorage = localStorage.getItem("cartItem") ? JSON.parse(localStorage.getItem("cartItem")) : []
const userInfoFromLocalStorage = localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : undefined;

const initial = {
    cart: {
        cartItem: cartFromLocalStorage
    },
    user: {
        userInfo: userInfoFromLocalStorage
    }
}

/* This is the store creation. */
const store = createStore(rootReducer,
    initial,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;