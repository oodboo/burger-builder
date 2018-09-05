import { takeEvery, all } from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import { logoutSaga, checkAuthTimeoutSaga, authUserSaga, authCheckStateSaga } from './auth';
import { initIngredientsSaga } from './burgerBuilder';
import { purchaseBurgerSaga, fetchOrdersSaga } from './order';

export function* watchAuth() {
    yield takeEvery(actionTypes.AUTH_INITIATE_LOGOUT, logoutSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_TIMEOUT, checkAuthTimeoutSaga);
    yield takeEvery(actionTypes.AUTH_USER, authUserSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, authCheckStateSaga);

    //yield takeEvery(actionTypes.AUTH_CHECK_STATE, initIngredientsSaga);
}


export function* watchBurgerBuilder() {
    yield takeEvery(actionTypes.AUTH_CHECK_STATE, initIngredientsSaga);
}

export function* watchOrder() {
    yield all([
        takeEvery(actionTypes.PUECHASE_BURGER, purchaseBurgerSaga),
        takeEvery(actionTypes.FETCH_ORDERS, fetchOrdersSaga)
    ]);
}

