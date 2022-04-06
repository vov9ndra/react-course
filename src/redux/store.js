import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'i learn react', likesCount: 13}
            ],
            newPostText: ''
        },

        dialogsPage: {
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
        }

    },

    _callSubscriber() {
    },

    addPost() {
        let newPost = {
            id: 2,
            message: this._state.profilePage.newPostText,
            likesCount: 0,
        };

        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ''
        this._callSubscriber(this._state)
    },

    updatePostText(newText) {
        this._state.profilePage.newPostText = newText
        this._callSubscriber(this._state)
    },

    addMessage() {
        let newMessage = {
            id: 4,
            message:  this._state.dialogsPage.newMessageText,
        };

        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ''
        this._callSubscriber(this._state)
    },

    updateNewMessageText(newMessageText) {

        this._state.dialogsPage.newMessageText = newMessageText
        this._callSubscriber(this._state)

    },
    subscribe(observer) {
        this._callSubscriber = observer
    },

    getState() {
        return this._state
    },

    dispatch (action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._callSubscriber(this._state)
    }
}


window.store = store
export default store;
