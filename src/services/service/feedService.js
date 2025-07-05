import apiService from "../base/apiService"

export const fetchProduct = ({offset=0, limit= 10}) => {
    return apiService.get(`/products?offset=${offset}&limit=${limit}`)
}