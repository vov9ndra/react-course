import { followUser, getUsersAPI, unfollowUser } from '../api/api.js';

let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
    followingInProgress: [],
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':

            return {
                 ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return u
                })
            };

        case 'SET_USERS':
            return {
                ...state,
                users:  action.users
            };

        case 'SET_CURRENT_PAGE' :
            return {
                ...state,
                currentPage: action.currentPage
            };

        case 'SET_TOTAL_COUNT':
            return {
                ...state,
                totalUsersCount:  action.totalCount
            };

        case 'TOGGLE_FETCHING':
            return {
                ...state,
              isFetching:  action.isFetching
            };

        case 'TOGGLE_FOLLOWING_PROGRESS':
            return {
                ...state,
                followingInProgress:  action.isFetching ?
                    [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };

        default: return state
    }
}

export const toggleFollow = (userId) => ({
    type: 'TOGGLE_FOLLOW', userId
})

export const setUsers = (users) => ({
    type: 'SET_USERS', users
})

export const setCurrentPage = (currentPage) => ({
    type: 'SET_CURRENT_PAGE', currentPage
})


export const setTotalUsersCount = (totalCount) => ({
    type: 'SET_TOTAL_COUNT', totalCount
})

export const toggleIsFetching = (isFetching) => ({
    type: 'TOGGLE_FETCHING', isFetching
})

export const toggleFollowingProgress = (isFetching, userId) => ({
    type: 'TOGGLE_FOLLOWING_PROGRESS', isFetching, userId
})

export const getUsersThunkCreator = (currentPage, pageSize) => {
    return (dispatch) => {
        getUsersAPI(currentPage, pageSize).then(response => {
            dispatch(toggleIsFetching(true));
            dispatch(setUsers(response.items));
            dispatch(setTotalUsersCount(response.totalCount));
            dispatch(toggleIsFetching(false));
    })
}}


export  const followUserThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        followUser(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const unfollowUserThunkCreator = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId))
        unfollowUser(userId)
            .then(response => {
                if (response.data.resultCode == 0) {
                    dispatch(toggleFollow(userId))
                }
                dispatch(toggleFollowingProgress(false, userId))
            })
    }
}

export const pageChangedThunkCreator = (pageNumber, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(pageNumber))
        getUsersAPI(pageNumber, pageSize).then(response => {
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(response.items))
            })
    }
}


export default usersReducer
