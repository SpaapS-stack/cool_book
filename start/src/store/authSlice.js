// rxslice
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: {
        login: '',
        password: ''
    },
    isAuth: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    authAction(state, action) {
        state.user = action.payload;
        state.isAuth = true;
      },
  }
});

export const {authAction} = authSlice.actions

export default authSlice.reducer