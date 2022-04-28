import React from 'react';
import s from "./User.module.css";
import * as axios from 'axios'
import Users from '../users/Users'
import Preloader from './../Common/Preloader.js'


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.toggeleIsFetching(true)
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
                this.props.toggeleIsFetching(false)

            })
        alert('adasfaf')
        }

    }

    onPageChanged = (pageNumber) => {
        this.props.toggeleIsFetching(true)
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggeleIsFetching(false)
            this.props.setUsers(response.data.items)

        })
    }

    render() {
        return  <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   usersData={this.props.usersData}
                   toggleFollow={this.props.toggleFollow}
            />
        </>

    }
};

export default UsersAPIComponent;
