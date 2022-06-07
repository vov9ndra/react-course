import React from 'react';
import {
    followUserThunkCreator,
    getUsersThunkCreator,
    pageChangedThunkCreator,
    setCurrentPage,
    setTotalUsersCount,
    setUsers,
    toggleFollow,
    toggleFollowingProgress,
    toggleIsFetching,
    unfollowUserThunkCreator
} from './../../redux/users-reducer';
import UsersAPIComponent from './UsersAPIComponent';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from '../../redux/users-selectors.js';


let mapStateToProps = (state) => {
    return {
        usersData: getUsers(state),
        totalUsersCount: getTotalUsersCount(state),
        pageSize: getPageSize(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
}}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {dispatch(toggleFollow(userId))},
        setUsers: (users) => {dispatch(setUsers(users))},
        setCurrentPage: (pageNumber) => {dispatch(setCurrentPage(pageNumber))},
        setTotalUsersCount: (totalCount) => {dispatch(setTotalUsersCount(totalCount))},
        toggleIsFetching: (isFetching) => {dispatch(toggleIsFetching(isFetching))},
        toggleFollowingProgress: (isFetching, userId) => {dispatch(toggleFollowingProgress(isFetching, userId))},
        getUsersThunkCreator: (currentPage, pageSize) => {dispatch(getUsersThunkCreator(currentPage, pageSize))},
        followUserThunkCreator: (userId) => {dispatch(followUserThunkCreator(userId))},
        unfollowUserThunkCreator: (userId) => {dispatch(unfollowUserThunkCreator(userId))},
        pageChangedThunkCreator: (pageNumber, pageSize) => {dispatch(pageChangedThunkCreator(pageNumber, pageSize))}

}}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
)(UsersAPIComponent)