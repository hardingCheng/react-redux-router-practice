import axios from 'axios'
import setToken from "../utils/setToken"
import { SET_USER } from "../constants/index"
import jwtDecode from "jwt-decode"
export const setUser = (user) => {
    return {
        type: SET_USER,
        user
    }
}
export const userLogin  = (loginData) => {
    return dispatch => {
        return axios.post('/api/auth',loginData ).then(res => {
            const token = res.data
            localStorage.setItem('token',token)
            setToken(token)
            dispatch(setUser(jwtDecode(token)))
        })
    }
}
export const clearUser = (user) => {
   return dispatch => {
       localStorage.removeItem('token')
       setToken(false)
       dispatch(setUser({}))
   }
}
