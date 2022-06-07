import { getStatus, getUserProfile, updateStatus } from '../api/api.js';

let initialState = {
    posts: [
        {id: 1, message: 'i learn react', likesCount: 13}
    ],
    newPostText: 'vsdvsdv',
    profile: null,
    status: ''
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 2, message: action.newPostText, likesCount: 0}],
                newPostText: ''
            };

        case 'SET_USER_PROFILE':
            return {
                ...state,
                profile: action.profile
            };

        case 'SET_STATUS':
            return {
                ...state,
                status: action.status
            };

        default: return state
    }
}

export const addPostActionCreator = (newPostText) => ({
    type: 'ADD-POST', newPostText
})

export const setUserProfileAC = (profile) => ({
    type: 'SET_USER_PROFILE', profile
})

export const setStatus = (status) => ({
    type: 'SET_STATUS', status
})


export const getUserProfileThunkCreator = (userId) => {
    return (dispatch) => {
        getUserProfile(userId).then(response => {
            dispatch(setUserProfileAC(response.data))
    })
}}

export const getStatusThunkCreator = (userId) => {
    return (dispatch) => {
        getStatus(userId).then(response => {
            dispatch(setStatus(response.data))
    })
}}

export const updateStatusThunkCreator = (status) => {
    return (dispatch) => {
        updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status))
            }
        })
    }}


export default profileReducer
