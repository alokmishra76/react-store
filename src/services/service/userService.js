import apiService from "../base/apiService"


export const onLogin = (payload) => {
    return apiService.post('/auth/login', payload);
}

export const getUserProfile = (token) => {
    return apiService.fetchUserProfile('/auth/profile', token);
}