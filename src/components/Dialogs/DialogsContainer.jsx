import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, onMessageChangeActionCreator} from './../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from 'react-redux'


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogs,
        messagesData: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (newText) => {dispatch(onMessageChangeActionCreator(newText))},
        addNewMessage: () => {dispatch(addMessageActionCreator())}
    }

}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)


export default DialogsContainer