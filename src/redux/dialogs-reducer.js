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
};

let dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            return {
                ...state,
                messages: [...state.messages, {id: 4, message: action.newMessage}] ,
            }

        default:
            return state

    }
}


export const addMessageActionCreator = (newMessage) => ({
    type: 'ADD-MESSAGE', newMessage
})

export default dialogsReducer