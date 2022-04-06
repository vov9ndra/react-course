import React from 'react';
import s from "./User.module.css";

let Users = (props) => {
    return <div>
                {props.usersData.map(u => <div key={u.id} >
                    <div className={s.userBlock}>
                        <div>
                            <img className={s.avatar} src={u.photoUrl}/>
                        </div>
                        <div className={s.fullName}>
                            {u.fullName.firstName + ' ' + u.fullName.secondName}
                        </div>
                        <div className={s.status}>
                            {u.status}
                        </div>
                        <div className={s.location}>
                            {u.location.country + ', ' + u.location.nameCity}
                        </div>
                        <div>
                            {u.followed ? <button onClick={() => {props.toggleFollow(u.id)}}>Unfollow</button> : <button onClick={() => {props.toggleFollow(u.id)}}>Follow</button>}
                        </div>
                    </div>
                </div>
                )}
        </div>
}

export default Users;