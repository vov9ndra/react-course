import React from 'react';
import Header from './Header.jsx';
import { connect } from 'react-redux';
import { logoutThunkCreator, setLoginThunkCreator } from '../../redux/auth-reducer.js';


class HeaderContainer extends React.Component {
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
});

let mapDispatchToProps = (dispatch) => {
    return {
        setLoginThunkCreator: (email, id, login) => {dispatch(setLoginThunkCreator(email, id, login))},
        logoutThunkCreator: () => {dispatch(logoutThunkCreator())}
    }}

export default connect( mapStateToProps, mapDispatchToProps)(HeaderContainer)
