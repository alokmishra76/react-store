import apiService from "../base/apiService"

export const fetchProduct = () => {
    return apiService.get(`/products`)
}

export const fetchProductById = (id) => {
    return apiService.get(`/products/${id}`)
}