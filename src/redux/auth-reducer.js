import { getAuth, login, logout } from '../api/api.js';

let initialState = {
    email: null,
    id: null,
    login: null,
    isAuth: false
};

let authReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_LOGIN_DATA':
            return {
                ...state,
                ...action.payload,
            };

        default: return state
    }
}

export const setLoginData = (email, id, login, isAuth) => ({
    type: 'SET_LOGIN_DATA', payload: {email, id, login, isAuth}
})

export const setLoginThunkCreator = () =>
    (dispatch) => {
        return getAuth()
            .then(response => {
                if (response.resultCode === 0) {
                    let {email, id, login} = response.data
                    dispatch(setLoginData( email, id, login, true))
                }
            })
    }

export const loginThunkCreator = (email, password, rememberMe, setStatus) => {
    return (dispatch) => {
        login(email, password, rememberMe)
            .then(response => {
                if (response.resultCode === 0) {
                    dispatch(setLoginThunkCreator())
                } else {setStatus({status: response.data.messages})
                     }
            })
    }
}

export const logoutThunkCreator = () => {
    return (dispatch) => {
        logout()
            .then(response => {
                dispatch(setLoginData( null, null, null, false))
            })
    }
}

export default authReducer
