import { async } from "q"
import authApi from "../API/auth-api"

const SET_USER_DATA = "SET_USER_DATA"
const LOGOUT = "LOGOUT"

const initialState = {
    userData: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: return {
            ...state,
            userData: [action.data]
        }            
        case LOGOUT: return {
            ...state,
            userData: null
        }
        default: return state
    }
}

const setUserData = (data) => ({ type: SET_USER_DATA, data })
const eraseUserData = () => ({ type: LOGOUT })

export const getUserData = (data) => async (dispatch) => {
    const res = await authApi.login(data)
    dispatch(setUserData(res))
}

export const logout = () => (dispatch) => {
    dispatch(eraseUserData())
}

export default authReducer