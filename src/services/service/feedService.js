import apiService from "../base/apiService"

export const fetchProduct = () => {
    return apiService.get("/products")
}