import React from 'react';
import s from './ProfileInfo.module.css'
import Preloader from './../../Common/Preloader.js'


const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={s.pic} src='https://i.ucrazy.ru/files/i/2012.3.6/1331032142_savv-3.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.small}/>
                <div>
                  Status:  {props.profile.aboutMe}
                </div>
                <div>
                    Status:  {props.profile.aboutMe}
                </div>

            </div>
        </div>

    )

}

export default ProfileInfo