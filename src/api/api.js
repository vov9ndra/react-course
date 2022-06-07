import * as axios from 'axios';


const instance = axios.create({
    withCredentials: true,
    baseURL: "https://social-network.samuraijs.com/api/1.0/",
    headers: {
        'API-KEY': '2b6d6553-fd09-413e-94a1-c29d9e9c1618'
    }

})

export const getUsersAPI = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => response.data)
}


export const getAuth = () => {
    return instance.get('auth/me')
        .then(response => response.data)
}

export const getUserProfile = (userId) => {
    return instance.get('profile/' + userId)
}

export const followUser = (id) => {
    return instance.post('follow/' + id)
}

export const unfollowUser  = (id) => {
    return instance.delete('follow/' + id)
}

export const getStatus = (userId) => {
    return instance.get('profile/status/' + userId)
}

export const updateStatus = (status) => {
    return instance.put('profile/status', { status: status})
}

export const login = (email, password, rememberMe) => {
    return instance.post('auth/login', {email, password, rememberMe})
}

export const logout = () => {
    return instance.delete('auth/login')
}