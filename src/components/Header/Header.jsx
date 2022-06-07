import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';


const Header = (props) => {
    return <header className={s.header}>
        <img src='https://japanauto.ru/_upload/dc3c/Toyota-logo-1989-2560x1440[1].png'></img>
        <div className={s.loginBlock}>
            { props.isAuth ?
                <div> {props.login} - <button onClick={props.logoutThunkCreator}>Log out</button></div>
                : <NavLink to='login'>Login</NavLink>}

        </div>
    </header>

}

export default Header