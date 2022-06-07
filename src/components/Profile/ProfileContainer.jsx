import React from 'react';
import Profile from './Profile.jsx';
import {
    getStatusThunkCreator,
    getUserProfileThunkCreator,
    setUserProfileAC,
    updateStatusThunkCreator
} from './../../redux/profile-reducer.js';
import { connect } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import withAuthRedirect from '../HOC/AuthRedirect.js';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId
        this.props.getUserProfileThunkCreator(userId)
        this.props.getStatusThunkCreator(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunkCreator}/>
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

let mapDispatchToProps = (dispatch) => {
    return {
        setUserProfileAC: (profile) => {dispatch(setUserProfileAC(profile))},
        getUserProfileThunkCreator: (userId) => {dispatch(getUserProfileThunkCreator(userId))},
        getStatusThunkCreator: (userId) => {dispatch(getStatusThunkCreator(userId))},
        updateStatusThunkCreator: (status) => {dispatch(updateStatusThunkCreator(status))},
    }
}

export function withRouter (Component) {
    function ComponentWithRouterProp(props){
        let navigate = useNavigate();
        let location = useLocation();
        let params = useParams();
        let AuthRedirectComponent = withAuthRedirect()
        return (
            <Component
                {...props}
                router={{ location, navigate, params, AuthRedirectComponent }}
            />
        )
    }
    return ComponentWithRouterProp
}

export default compose(
    connect (mapStateToProps, mapDispatchToProps),
    withRouter,
    withAuthRedirect
)(ProfileContainer)