import React from 'react';
import Users from '../users/Users';
import Preloader from './../Common/Preloader.js';


class UsersAPIComponent extends React.Component {

    componentDidMount() {
        if (this.props.usersData.length === 0) {
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChanged = (pageNumber) => {
        this.props.pageChangedThunkCreator(pageNumber, this.props.pageSize)
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
                   toggleFollowingProgress={this.props.toggleFollowingProgress}
                   followingInProgress={this.props.followingInProgress}
                   followUserThunkCreator={this.props.followUserThunkCreator}
                   unfollowUserThunkCreator={this.props.unfollowUserThunkCreator}
            />
        </>

    }
};

export default UsersAPIComponent;

