import { delay } from 'redux-saga';
import { put } from 'redux-saga/effects';
// import * as actionTypes from '../actions/actionTypes';
import * as actions from '../actions/index';
import axios from 'axios';


export function* logoutSaga(action) {
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('expirationDate');
    yield localStorage.removeItem('userId');
    yield put(actions.logoutSucceed());
    // yield put ({
    //     type: actionTypes.AUTH_LOGOUT,
    // });
}

export function* checkAuthTimeoutSaga(action) {
    yield delay(action.expirationTime * 1000);
    yield put(actions.authLogout());
    // setTimeout(() => {
    //     dispatch(authLogout());
    // }, expirationTime * 1000); 
}

export function* authUserSaga(action) {
    put(actions.authStart());
    const authData = {
        email: action.email,
        password: action.password,
        returnSecureToken: true
    };
    let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC690fgd-x4OmxeCE9zZLAoEdwLPdzeT20';
    if (!action.isSignup) {
        url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC690fgd-x4OmxeCE9zZLAoEdwLPdzeT20';
    }
    const response = yield axios.post(url, authData);
    try {
        const expirationDate = yield new Date(new Date().getTime() + response.data.expiresIn * 1000);
        yield localStorage.setItem('token', response.data.idToken);
        yield localStorage.setItem('expirationDate', expirationDate);
        yield localStorage.setItem('userId', response.data.localId);
        yield put(actions.authSuccess(response.data.idToken, response.data.localId));
        yield put(actions.checkAuthTimeout(response.data.expiresIn));
    }
    catch (error) {
        const errorObject = error.response ? error.response.data.error : error;
        yield put(actions.authFail(errorObject));
    }
}

//409
export function* authCheckStateSaga(action) {

    const token = yield localStorage.getItem('token');
    if (!token) {
        yield put(actions.authLogout());
    } else {
        const expirationDate = yield new Date(localStorage.getItem('expirationDate'));
        if (expirationDate <= new Date()) {
            yield put(actions.authLogout());
        } else {
            const userId = localStorage.getItem('userId');
            yield put(action.authSuccess(token, userId));
            yield put(action.checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
        }
    }

}

