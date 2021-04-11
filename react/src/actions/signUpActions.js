import axios from 'axios'

export const userSignUpRequest = (userData) => {
    return dispatch => {
        return axios.post('/api/users',userData )
    }
}

