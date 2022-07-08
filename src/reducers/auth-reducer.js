const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH"

const initialState = {
    isAuth: false,
    userData: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_AUTH: return {
            ...state,
            isAuth: action.isAuth
        }            
        default: return state
    }
}

const toggleIsAuth = (isAuth) => ({ type: TOGGLE_IS_AUTH, isAuth })

const authorize = () => (dispatch) => {
    
}

export default authReducer