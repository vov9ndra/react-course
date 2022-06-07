import React from 'react';
import { addMessageActionCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../HOC/AuthRedirect.js';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (newMessage) => {dispatch(addMessageActionCreator(newMessage))}
    }

}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)