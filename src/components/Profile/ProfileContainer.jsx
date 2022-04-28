import React from 'react';
import Profile from './Profile.jsx'
import {setUserProfileAC} from './../../redux/profile-reducer.js'
import * as axios from 'axios'
import {connect} from 'react-redux'
import {useLocation, useParams, useNavigate} from 'react-router-dom'


class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        let userId = this.props.router.params.userId
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId).then(response => {
            this.props.setUserProfileAC(response.data)
        })
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
});

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfileAC: (profile) => {dispatch(setUserProfileAC(profile))}
    }
}

function withRouter (Component) {
    function ComponentWithRouterProp(props){
        let navigate = useNavigate();
        let location = useLocation();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        )
    }
    return ComponentWithRouterProp
}

export default connect (mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer))

