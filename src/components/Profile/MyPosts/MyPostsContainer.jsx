import React from "react";
import {addPostActionCreator, onPostChangeActionCreator} from './../../../redux/profile-reducer'
import MyPosts from './MyPosts'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {dispatch(onPostChangeActionCreator(text))},
        addPost: () => {dispatch(addPostActionCreator())}
    }
}

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;