import React from 'react';
import s from './Dialogs.module.css';
import Message from './Message/MessageItem';
import DialogItem from './DialogItem/DialogItem';
import { useFormik } from 'formik';


const NewMessageForm = (props) => {
    const formik = useFormik({
        initialValues: {
            newMessage: ''
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
            props.addMessage(values.newMessage)
        }
    })
    return (
        <form onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor={'newMessage'}>newMessage</label>
                <input
                    id='newMessage'
                    name='newMessage'
                    type='text'
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    value={formik.values.newMessage}
                />
            </div>
            <button type='sendMessage'>send message</button>
        </form>
    );
}

const Dialogs = (props) => {

    let messageElements = props.messagesData.map( (m, index) => <Message key={index} message={m.message}/>);
    let dialogsElements = props.dialogsData.map( (d, index) => <DialogItem key={index} name={d.name} id={d.id}/>);

    let addMessage = (newMessage) => {
        props.addNewMessage(newMessage)
    };
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <NewMessageForm addMessage={addMessage}/>
        </div>
    );

};

export default Dialogs