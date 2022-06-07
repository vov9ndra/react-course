import React from 'react';
import s from './User.module.css';
import { NavLink } from 'react-router-dom';

let Users = (props) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)

    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((p, id) => <span key={id} className={props.currentPage === p ? s.selectedPage : ''}
                                        onClick={(e) => {
                                            props.onPageChanged(p)
                                        }}>{p} </span>
            )}
        </div>
        {props.usersData.map(u => <div key={u.id}>
                <div className={s.userBlock}>
                    <div>
                        <NavLink to={'../profile/' + u.id}>
                            <img className={s.avatar}
                                 src={u.photos.small != null ? u.photos.small : 'https://ростр.рф/assets/img/no-profile.png'}/>
                        </NavLink>

                    </div>
                    <div className={s.fullName}>
                        {u.name}
                    </div>
                    <div className={s.status}>
                        {u.status}
                    </div>
                    <div className={s.location}>
                        {"u.location.country + ', ' + u.location.nameCity"}
                    </div>
                    <div>
                        {u.followed?
                            <button disabled={props.followingInProgress.some( id => id === u.id)}
                                    onClick={() => { props.unfollowUserThunkCreator(u.id) }}>Unfollow</button>
                            : <button disabled={props.followingInProgress.some( id => id === u.id)}
                                      onClick={() => { props.followUserThunkCreator(u.id) }}>Follow</button> }
                    </div>
                </div>
            </div>
        )}
    </div>

}

export default Users;
