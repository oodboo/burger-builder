import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    orders: [],
    loading: false,
    purchased: false
};

const purchaseInit = (state, action) => {
    return updateObject(state, { purchased: false});
}

///.... same for other simply redundant and boring ...

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.PUECHASE_INIT: return purchaseInit(state, action);
        // return {
        //     ...state,
        //     purchased: false
        // };
        case actionTypes.PUECHASE_BURGER_START:
            return {
                ...state,
                loading: true
            };
        case actionTypes.PUECHASE_BURGER_SUCESS:
            const newOrder = {
                ...action.orderData,
                id: action.orderId
            }
            return {
                ...state,
                loading: false,
                purchased: true,
                orders: state.orders.concat(newOrder)
            };
        case actionTypes.PUECHASE_BURGER_FAIL:
            return {
                ...state,
                loading: false,
            };
        case actionTypes.FETCH_ORDERS_START:
            return {
                ...state,
                loading: true,
            };
        case actionTypes.FETCH_ORDERS_SUCCESS:

            return {
                ...state,
                loading: false,
                orders: action.orders
            };
        case actionTypes.FETCH_ORDERS_FAIL:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default reducer;
