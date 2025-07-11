import apiService from "../base/apiService"


export const onLogin = (payload) => {
    return apiService.post('/auth/login', payload);
}