import axios from "axios";

const instance = axios.create({
    baseURL: "//192.168.1.130:8080",
    withCredentials: true
})

const authApi = {
    async register({ username, password }) {
        const res = await instance.post("/register", {username, password})
        return res.data
    },
    async login(data) {
        const res = await instance.post("/login", {data})
    }
}

export default authApi