
let initialState = {
    posts: [
        {id: 1, message: 'i learn react', likesCount: 13}
    ],
    newPostText: 'vsdvsdv'
};

let profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST':
            return {
                ...state,
                posts: [...state.posts, {id: 2, message: state.newPostText, likesCount: 0}],
                newPostText: ''
            };

        case 'UPDATE-POST-TEXT':
            return {
                ...state,
                newPostText: action.newPostText
            }
        default: return state
    }
}

export const addPostActionCreator = () => ({
    type: 'ADD-POST'
})

export const onPostChangeActionCreator = (text) => ({
    type: 'UPDATE-POST-TEXT', newPostText: text
})


export default profileReducer
