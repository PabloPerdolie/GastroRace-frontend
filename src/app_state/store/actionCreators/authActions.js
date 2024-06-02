import Cookies from "universal-cookie"
import { authError, authLoading, authSuccess, removeAccess } from "../reducers/authSlice"
import { jwtDecode } from "jwt-decode"
import AuthService from "../../axios/Auth"


export const login = (username, password) => async (dispatch) => {
    dispatch(authLoading())
    try {
        const { data } = await AuthService.login(username, password)
        const cookies = new Cookies()
        console.log(data)
        cookies.set('token', data.token, jwtDecode(data.token).exp)
        cookies.set('isAdmin', data.IsAdmin, jwtDecode(data.token).exp)
        dispatch(authSuccess(data.IsAdmin))
    } catch (error) {
        console.log(error)
        dispatch(authError(error.message))
    }
}

export const registration = (username, password, email) => async (dispatch) => {
    dispatch(authLoading())
    try {
        const { data } = await AuthService.registration(username, password, email)
        const cookies = new Cookies()
        cookies.set('token', data, jwtDecode(data).exp)
        dispatch(authSuccess(false))
    } catch (error) {
        dispatch(authError(error.message))
    }
}

export const logout = () => async (dispatch) => {
    dispatch(authLoading())
    try {
        const cookies = new Cookies()
        cookies.remove('token')
        cookies.remove('isAdmin')
        dispatch(removeAccess())
    } catch (error) {
        dispatch(authError(error.message))
    }
}