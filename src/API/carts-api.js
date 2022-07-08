import axios from "axios";

const instance = axios.create({
    baseURL: "https://fakestoreapi.com/"
})

const cartsApi = {
    async getAllCarts() {
        const res = await instance.get(`carts`)
        debugger
    }
}

export default cartsApi