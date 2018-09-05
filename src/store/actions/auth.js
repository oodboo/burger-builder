import * as actionTypes from './actionTypes';
// import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, userId) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        //authData: authData
        idToken: token,
        userId: userId
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

// export const authLogout = (error) => {
export const authLogout = () => {
    // localStorage.removeItem('token');
    // localStorage.removeItem('expirationDate');
    // localStorage.removeItem('userId');
    return {
        //type: actionTypes.AUTH_LOGOUT,
        type: actionTypes.AUTH_INITIATE_LOGOUT,
    };
};


export const logoutSucceed = (error) => {
    return {
        type: actionTypes.AUTH_LOGOUT,
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return {
        type: actionTypes.AUTH_CHECK_TIMEOUT,
        expirationTime:expirationTime /* 10 */ /*expirationTime*/
    };
    // return dispatch => {
    //     setTimeout(() => {
    //         dispatch(authLogout());
    //     }, expirationTime * 1000); // this is in milliseconds 
    // };
};

export const auth = (email, password, isSignup) => {
return {
    type: actionTypes.AUTH_USER,
    email: email,
    password: password,
    isSignup: isSignup
};

    // return (dispatch) => {
    //     dispatch(authStart());
    //     const authData = {
    //         email: email,
    //         password: password,
    //         returnSecureToken: true
    //     };
    //     let url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyC690fgd-x4OmxeCE9zZLAoEdwLPdzeT20';
    //     if (!isSignup) {
    //         url = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyC690fgd-x4OmxeCE9zZLAoEdwLPdzeT20';
    //     }
    //     axios
    //         //.post('https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=AIzaSyC690fgd-x4OmxeCE9zZLAoEdwLPdzeT20', authData)
    //         .post(url, authData)
    //         .then((response) => {
    //             //console.log('Response', response);
    //             const expirationDate = new Date(new Date().getTime() + response.data.expiresIn * 1000);
    //             localStorage.setItem('token', response.data.idToken);
    //             localStorage.setItem('expirationDate', expirationDate);
    //             localStorage.setItem('userId', response.data.localId);
    //             dispatch(authSuccess(response.data.idToken, response.data.localId));
    //             dispatch(checkAuthTimeout(response.data.expiresIn));
    //         })
    //         .catch((error) => {
    //             //console.log('Error', error);
    //             const errorObject = error.response ? error.response.data.error : error;
    //             dispatch(authFail(errorObject));
    //         });
    // };
};

export const setAuthRedirectPath = (path) => {
    return {
        type: actionTypes.SET_AUTH_REDIRECT_PATH,
        path: path
    };
};


export const authCheckState = () => {
    return {
        type: actionTypes.AUTH_CHECK_STATE
    }
    // return (dispatch) => {
    //     const token = localStorage.getItem('token');
    //     if (!token) {
    //         // dispatch(authLogout()); //405.
    //     } else {
    //         const expirationDate = new Date(localStorage.getItem('expirationDate'));
    //         if (expirationDate <= new Date()) { //logic error expiration date > to <=
    //             // dispatch(authLogout()); //405.
    //         } else {
    //             const userId = localStorage.getItem('userId');
    //             dispatch(authSuccess(token, userId));
    //             //dispatch(checkAuthTimeout(expirationDate.getSeconds() - new Date().getSeconds()));// error it should be milliseconds it fires time
    //             dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000));
    //         }
    //     }
    // };
}

