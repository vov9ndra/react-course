let initialState = {
    messages: [
        {id: 1, message: 'r23df3'},
        {id: 2, message: 'r23 23 r2t 45 7 235r3y '},
        {id: 3, message: 'g34g3g24 2 r23r'},
    ],
    dialogs: [
        {id: 1, name: 'Olya'},
        {id: 2, name: 'Sveta'},
        {id: 3, name: 'Masha'},
        {id: 4, name: 'Danil'},
        {id: 5, name: 'Tanya'}
    ],
    newMessageText: 'awfa'
};




let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: state.newMessageText}] ,
                newMessageText: ''
            }

        case 'UPDATE-NEW-MESSAGE-TEXT':
            return {
                ...state,
                newMessageText: action.newMessageText
            }
        default:
            return state

    }
}


export const addMessageActionCreator = () => ({
    type: 'ADD-MESSAGE'
})

export const onMessageChangeActionCreator = (text) => ({
    type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: text
})


export default dialogsReducer