import axios from "axios";

const API_KEY = "8bf25ae8e0beca0875ec91d1f46621b0"

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/"
})

const productsApi = {
    async getProducts() {
        const res = await instance.get("products")
        return res.data;
    },

    async getSingleProduct(productId) {
        const res = await instance.get(`products/${productId}`)
        return res.data
    },

    async getCategoryProducts(categoryName) {
        const res = await instance.get(`products/category/${categoryName}`)
        return res.data
    },

    async getCategories() {
        const res = await instance.get("products/categories")
        return res.data
    },
    async getCarts() {
        const res = await instance.get("carts")
        return res.data
    },
    async getAllUsers() {
        const res = await instance.get("users")
        debugger
        return res.data
    }
}

export default productsApi