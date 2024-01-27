import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { reducers } from "../reducers/userReducer";
import axios from "axios";
import { server } from "../../server";

export const fetchUser = createAsyncThunk("fetchUser", async () => {
  const response = await axios(`${server}/user/getuser`, {
    withCredentials: true,
  });
  return response;
});

const initialState = {
  isAuthenticated: false,
  user: {},
  error: "",
};

const userSlice = createSlice({
  name: "user",
  reducers: reducers,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchUser.fulfilled, (state, action) => {
      console.log(action);
      state.user = action?.payload?.data?.user;
      state.isLoading = false;
    });

    builder.addCase(fetchUser.rejected, (state, action) => {
      state.error = action?.error?.message;
    });
  },
});

export const { loadUser, loadUserError, loadUserSuccess } = userSlice.actions;
export default userSlice.reducer;
