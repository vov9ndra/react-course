import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import { useFormik } from 'formik';

const MyNewPostForm = (props) => {
    const formik = useFormik({
        initialValues: {
            newPostText: ''
        },
        onSubmit: values => {
            props.addPost(values.newPostText)
            console.log(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor={'newPostText'}>newPostText</label>
                <input
                    id='newPostText'
                    name='newPostText'
                    type='text'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.newPostText}
                />
            </div>
            <button type='submit'>publish</button>
        </form>
    );
};

const MyPosts = (props) => {

    let onAddPost = (newPostText) => {
        props.addPost(newPostText)
    }

    let postsElements = props.postsData.map( (p, index) => <Post key={index} message={p.message} likesCount={p.likesCount}/>)

    return (
        <div className={s.postsBlock}>
            <h3>My posts</h3>
            <MyNewPostForm addPost={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;