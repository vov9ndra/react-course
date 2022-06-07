import { setLoginThunkCreator } from './auth-reducer.js';

let initialState = {
    initialized: false
};

let appReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALIZED_SUCCESS':
            return {
                ...state,
                initialized: true,
            };

        default: return state
    }
}

export const initializedSuccess = () => ({type: 'INITIALIZED_SUCCESS'})

export const initializeAppThunkCreator = () => async (dispatch) => {
    await dispatch(setLoginThunkCreator());
    dispatch(initializedSuccess());
};

export default appReducer
