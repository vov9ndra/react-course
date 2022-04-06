import React from 'react';
import s from './ProfileInfo.module.css'


const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.pic} src='https://i.ucrazy.ru/files/i/2012.3.6/1331032142_savv-3.jpg'></img>
            </div>
            <div className={s.descriptionBlock}>
                ava+description
            </div>
        </div>

    )

}

export default ProfileInfo