
let initialState = {
    users: [],
    pageSize: 20,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: true,
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

        default: return state
    }
}

export const toggleActionCreator = (userId) => ({
    type: 'TOGGLE_FOLLOW', userId: userId
})

export const setUsersAC = (users) => ({
    type: 'SET_USERS', users
})

export const setCurrentPageAC = (currentPage) => ({
    type: 'SET_CURRENT_PAGE', currentPage
})


export const setTotalCountAC = (totalCount) => ({
    type: 'SET_TOTAL_COUNT', totalCount
})

export const toggleFetchingAC = (isFetching) => ({
    type: 'TOGGLE_FETCHING', isFetching
})

export default usersReducer
