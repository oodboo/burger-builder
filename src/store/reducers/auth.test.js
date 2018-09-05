import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';

describe('auch reducer', () => {
    it('should return the intial stata', () => {
        const expectVal = {
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        };

        expect(reducer(undefined, {})).toEqual(expectVal);
    });

    it('should store token upon longin', () => {
        const expectVal = {
            token: null,
            userId: null,
            error: null,
            loading: false,
            authRedirectPath: '/'
        };

        expect(reducer(expectVal, {
            type: actionTypes.AUTH_SUCCESS,
            idToken: 'some-token',
            userId: 'some-user-id'
        })
        ).toEqual({
            token: 'some-token',
            userId: 'some-user-id',
            error: null,
            loading: false,
            authRedirectPath: '/'
        });
    });
});
