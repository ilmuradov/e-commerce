import axios from "axios";

const instance = axios.create({
    baseURL: "http://192.168.1.130:8080"
    // baseURL: "https://fakestoreapi.com/"
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