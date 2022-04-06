import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";
import {addMessageActionCreator, onMessageChangeActionCreator} from './../../redux/dialogs-reducer'



const Dialogs = (props) => {

    let messageElements = props.messagesData.map( (m, index) => <Message key={index} message={m.message}/>)
    let dialogsElements = props.dialogsData.map( (d, index) => <DialogItem key={index} name={d.name} id={d.id}/>)

    let newMessageElement = React.createRef() // в 31 уроке в комментах говорят про использование useRef

    let addMessage = () => {
        props.addNewMessage()
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value
        props.updateMessageText(text)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea ref={newMessageElement} value={props.newMessageText} onChange={onMessageChange}/>
            </div>
            <div>
                <button onClick={addMessage}>отправить сообщение</button>
            </div>
        </div>
    );

}

export default Dialogs