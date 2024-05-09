import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'authSlice',
    initialState: {
        loading: false,
        userData: null,
        error: null,
        admin: false
    },
    reducers: {
        authLoading(state) {
            state.loading = true
            state.error = null
        }, 
        authSuccess(state, action) {
            state.loading = false
            state.userData = true
            state.admin = action.payload
        },
        removeAccess(state) {
            state.loading = false
            state.userData = null
            state.admin = false
        },
        authError(state, action) {
            state.loading = false
            state.error = action.payload
        },
    }
})

export const {
    authLoading,
    authSuccess,
    authError,
    removeAccess
} = authSlice.actions

export const selectUserData = (state) => state.auth

export default authSlice.reducer