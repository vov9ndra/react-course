import React from 'react';
import s from './Navbar.module.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


const Navbar = (props) => {

    return <nav className={s.nav}>
    <div className={s.item}>
        <NavLink to={'profile/' + props.id}  className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to='dialogs' className={navData => navData.isActive ? s.active : s.item}>Messages</NavLink>
    </div><div className={s.item}>
        <NavLink to='users' className={navData => navData.isActive ? s.active : s.item}>Users</NavLink>
    </div>
    {/*<div className={s.item}>
        <NavLink to='feed'>News</NavLink>
    </div>
    <div className={s.item}>
        <NavLink to='music'>Music</NavLink>
    </div>
    <div className={s.item}>
        <NavLink>Settings</NavLink>*/}
    {/*</div>*/}
    </nav>

}

const mapStateToProps = (state) => ({
    id: state.auth.id
})

export default connect(mapStateToProps, null)(Navbar)