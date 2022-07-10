import authApi from "../API/auth-api"

const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_IS_REGISTERED = "TOGGLE_IS_REGISTERED"
const SET_STATUS = "SET_STATUS"
const LOGOUT = "LOGOUT"

const initialState = {
    userData: null,
    status: null,
    isRegistered: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: return {
            ...state,
            userData: {...action.data}
        }     
        case TOGGLE_IS_REGISTERED: return {
            ...state,
            isRegistered: action.isRegistered
        }
        case SET_STATUS: return {
            ...state,
            status: action.status
        }
        case LOGOUT: return {
            ...state,
            userData: null
        }
        default: return state
    }
}

const setUserData = (data) => ({ type: SET_USER_DATA, data })
const toggleIsRegistered = (isRegistered) => ({ type: TOGGLE_IS_REGISTERED, isRegistered })
const setStatus = (status) => ({ type: SET_STATUS, status })
const eraseUserData = () => ({ type: LOGOUT })

export const initializeUser = () => async (dispatch) => {
    const res = await authApi.authMe()
    if(res.response && res.response.status === 401) {
        console.log("Unauthorized")
    } else setUserData(res.data)
}

export const getUserData = (data) => async (dispatch) => {
    const res = await authApi.register(data)
    if(res.id) {
        dispatch(toggleIsRegistered(true))
    }
}

export const login = (data) => async (dispatch) => {
    const res = await authApi.login(data)
    if(res.response && res.response.status === 401) {
        dispatch(setStatus(res.response.status))
    } else dispatch(setUserData(res.data))
}

export const logout = () => (dispatch) => {
    dispatch(eraseUserData())
}

export default authReducer