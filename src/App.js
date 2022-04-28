import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs'
import {Route, Routes, BrowserRouter} from "react-router-dom";
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer.jsx'


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer/>} />
                        <Route path='/profile' element={<ProfileContainer/>}/>
                        <Route path='/profile/:userId?' element={<ProfileContainer/>}/>
                        <Route path='/users' element={<UsersContainer/>} />
                        {/*<Route path='/music' element={<Music />}/>}*/}
                    </Routes>
                </div>
            </div>
        </BrowserRouter>)
}

export default App;
