import React from 'react';
import {toggleActionCreator, setUsersAC} from './../../redux/users-reducer'
import Users from './Users'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        usersData: state.usersData.users
}}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {dispatch(toggleActionCreator(userId))},
        setUsers: (users) => {dispatch(setUsersAC(users))}
}}

let UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer