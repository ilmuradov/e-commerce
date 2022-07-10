import axios from "axios";

const instance = axios.create({
    baseURL: "//192.168.1.130:8080",
    withCredentials: true
})

const authApi = {
    async register({ username, lastname, password }) {
        const res = await instance.post("/register", {username, lastname, password})
        return res.data
    },
    async login({ username, password }) {
        const res = await instance.post("/login", {username, password})
        .catch((error) => error)
        return res
    }
}

export default authApi