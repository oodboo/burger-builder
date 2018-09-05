export const INIT_INGREDIENT = 'INIT_INGREDIENT';
export const ADD_INGREDIENT = 'ADD_INGREDIENT';
export const REMOVE_INGREDIENT = 'REMOVE_INGREDIENT';
export const SET_INGREDIENT = 'SET_INGREDIENT';
export const FETCH_INGREDIENT_FAILED = 'FETCH_INGREDIENT_FAILED';

export const PUECHASE_BURGER  = 'PUECHASE_BURGER';
export const PUECHASE_BURGER_START  = 'PUECHASE_BURGER_START';
export const PUECHASE_BURGER_SUCESS  = 'PUECHASE_BURGER_SUCESS';
export const PUECHASE_BURGER_FAIL = 'PUECHASE_BURGER_FAIL';
export const PUECHASE_INIT = 'PUECHASE_INIT';

export const FETCH_ORDERS = 'FETCH_ORDERS';
export const FETCH_ORDERS_START = 'FETCH_ORDERS_INIT';
export const FETCH_ORDERS_SUCCESS = 'FETCH_ORDERS_SUCCESS';
export const FETCH_ORDERS_FAIL = 'FETCH_ORDERS_FAIL';

export const AUTH_USER = 'AUTH_USER';

export const AUTH_START = 'AUTH_START'; //async action in Saga generator function fetching data
export const AUTH_SUCCESS = 'AUTH_SUCCESS'; //async action in Saga generator function fetching data
export const AUTH_FAIL = 'AUTH_FAIL'; //async action in Saga generator function fetching data

export const AUTH_INITIATE_LOGOUT = 'AUTH_INITIATE_LOGOUT'; //Logout.js //reducer ...
export const AUTH_LOGOUT = 'AUTH_LOGOUT'; //logoutSaga

export const AUTH_CHECK_TIMEOUT = 'AUTH_CHECK_TIMEOUT';
export const AUTH_CHECK_STATE = 'AUTH_CHECK_STATE';

export const SET_AUTH_REDIRECT_PATH = 'SET_AUTH_REDIRECT_PATH';