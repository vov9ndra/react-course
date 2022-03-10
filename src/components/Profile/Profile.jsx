import React from 'react';
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'


const Profile = () => {
    return <div className={s.content}>
    <div >   
        <img className={s.pic} src='https://i.ucrazy.ru/files/i/2012.3.6/1331032142_savv-3.jpg'></img>
    </div>
    <div>
        ava+description
    </div>
    <MyPosts />
    </div>
}

export default Profile 