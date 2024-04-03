import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});


export const userReducer = userSlice.reducer;

export const {setUsers} = userSlice.actions;

export const userSelector = (state)=>state.userReducer.users;