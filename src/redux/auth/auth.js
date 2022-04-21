import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const slice = createSlice({
    name: 'auth',
    initialState: {
        user: localStorage.getItem('user') ?
            JSON.parse(localStorage.getItem('user')) :
            null,
    },
    reducers: {
        loginRequest: (state, action) => {
            state.user = action.payload
        },
        loginSuccess: (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },
        logoutSuccess: state => {
            state.user = null
            localStorage.removeItem('user')
        }
    },
})
export const auth = slice.reducer;

export const { loginSuccess, logoutSuccess } = slice.actions
export const login = ( username, password ) => async dispatch => {
    try {
        // const res = await axios.post('/whatever', { username, password })
        dispatch(loginSuccess({username}))
    } catch (e) {
        return console.error(e.message)
    }
}
export const logout = () => async dispatch => {
    try {
        // const res = await api.post('/whatever/logout/')
        return dispatch(logoutSuccess())
    } catch (e) {
        return console.error(e.message)
    }
}