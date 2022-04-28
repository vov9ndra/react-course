import React from 'react';
import {toggleActionCreator, setUsersAC, setCurrentPageAC, setTotalCountAC, toggleFetchingAC} from './../../redux/users-reducer'
import UsersApiComponent from './UsersAPIComponent'
import {connect} from 'react-redux'
import UsersAPIComponent from './UsersAPIComponent'


let mapStateToProps = (state) => {
    return {
        usersData: state.usersData.users,
        totalUsersCount: state.usersData.totalUsersCount,
        pageSize: state.usersData.pageSize,
        currentPage: state.usersData.currentPage,
        isFetching: state.usersData.isFetching,
}}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {dispatch(toggleActionCreator(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPageAC(pageNumber))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalCountAC(totalCount))},
        toggeleIsFetching: (isFetching) => {dispatch(toggleFetchingAC(isFetching))},
}}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer