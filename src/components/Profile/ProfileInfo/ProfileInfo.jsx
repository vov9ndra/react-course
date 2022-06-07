import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader.js';
import ProfileStatusWithHooks from './ProfileStatusWithHooks.jsx';


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                  Status:  {props.profile.aboutMe}
                </div>
            </div>
        </div>

    )

}

export default ProfileInfo