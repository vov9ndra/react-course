import './App.css';
import HeaderContainer from './components/Header/HeaderContainer.jsx';
import Navbar from './components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer, { withRouter } from './components/Profile/ProfileContainer.jsx';
import Login from './components/Login/Login.jsx';
import { compose } from 'redux';
import React from 'react';
import { connect } from 'react-redux';
import { initializeAppThunkCreator } from './redux/app-reducer.js';
import Preloader from './components/Common/Preloader.js';


class App extends React.Component {
    componentDidMount() {
        this.props.initializeAppThunkCreator()
        console.log('=============')
    }

    render() {
        if (!this.props.initialized)  return <Preloader/>
        console.log('------------')

        return (
                <div className="app-wrapper">
                    <HeaderContainer/>
                    <Navbar/>
                    <div className="app-wrapper-content">
                        <Routes>
                            <Route path="/dialogs/*" element={<DialogsContainer/>}/>
                            <Route path="/profile" element={<ProfileContainer/>}/>
                            <Route path="/profile/:userId" element={<ProfileContainer/>}/>
                            <Route path="/users" element={<UsersContainer/>}/>
                            <Route path="/login" element={<Login/>}/>
                            {/*<Route path='/music' element={<Music />}/>}*/}
                        </Routes>
                    </div>
                </div>);
    }
}
let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    initialized: state.app.initialized
})

export default compose(
    connect(mapStateToProps, {initializeAppThunkCreator}),
    withRouter
)(App);
