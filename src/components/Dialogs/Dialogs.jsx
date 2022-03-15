import React from 'react';
import s from './Dialogs.module.css'
import Message from "./Message/MessageItem";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {



    let messageElements = props.messagesData.map( (m, index) => <Message key={index} message={m.message}/>)
    let dialogsElements = props.dialogsData.map( (d, index) => <DialogItem key={index} name={d.name} id={d.id}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
        </div>
    );

}

export default Dialogs