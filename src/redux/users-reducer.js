
let initialState = {
    users: [
        {id: 1, photoUrl: 'https://interesniefakti.com/wp-content/uploads/2020/11/984379-681x1024.jpg', followed: true, fullName: {firstName: "Гнида", secondName: 'Из кадетсва'}, status: 'Говорят, если вы никак не можете забыть человека - вы нужны ему', location: {nameCity: "Москва", country: "Россия"}},
        {id: 2, photoUrl: 'https://otvet.imgsmail.ru/download/191554341_d1ad018c70bed538764df4bda4da7007_800.jpg', followed: true, fullName: {firstName: "Галина", secondName: "Пердякова"}, status: 'С некоторыми людьми встреча в этой жизни была лишней', location: {nameCity: "химмаш", country: "Раша"}},
        {id: 3, photoUrl: 'https://anticwar.ru/wp-content/uploads/wp_article/2022-02-13/2022-02-13_200827143981952.jpeg', followed: false, fullName: {firstName: "Папин", secondName: "Бродяга"}, status: 'Помни, что бы ты не делал за спиной у людей, ты делаешь это на глазах у Бога', location: {nameCity: "Падик", country: "Улица"}},
        {id: 4, photoUrl: 'https://otvet.imgsmail.ru/download/u_da7575e36983fe454d6457e84bc957c7_800.jpg', followed: false, fullName: {firstName: "Мамин", secondName: "Симпотяга"}, status: 'Всё проходит, но не все забывается', location: {nameCity: "Запорожье", country: "Украина"}},
        {id: 5, photoUrl: 'https://privately.ru/gossip/uploads/posts/2020-09/privately.ru_veronika-zajceva-stala-populjarnoj-iz-za-travli-po-povodu-specifichnoj-vneshnosti-1.jpg', followed: true, fullName: {firstName: "Вероника", secondName: "Зайцева"}, status: 'раотаптап', location: {nameCity: "Душамбе", country: "Тажикистон"}},
        {id: 6, photoUrl: 'https://images.genius.com/b117e61cc592dce0616dd60f5d0c5ea1.640x640x1.jpg', followed: false, fullName: {firstName: "MC", secondName: "Анюта"}, status: 'Никогда не поздно, никогда не рано – поменять все планы, если это надо', location: {nameCity: "Петрада", country: "Украина"}},
        {id: 7, photoUrl: 'https://image.krasview.ru/video/4d579fa9cccd786/__4.jpg', followed: true, fullName: {firstName: "Рулон", secondName: "Обоев"}, status: 'мы таджики мы носители корон', location: {nameCity: "Душамбе", country: "Тажикистон"}}
    ],
};

let usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'TOGGLE_FOLLOW':

            return {
                 ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return u
                })
            };

        case 'SET_USERS':
            return {
                ...state,
                users: [...state.users, ...action.users]
            }

        default: return state
    }
}

export const toggleActionCreator = (userId) => ({
    type: 'TOGGLE_FOLLOW', userId: userId
})

export const setUsersAC = (users) => ({
    type: 'SET_USERS', users
})



export default usersReducer
