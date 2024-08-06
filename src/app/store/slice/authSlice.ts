import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "@/lib/axiosInstance";
import Cookies from "js-cookie";

type AuthState = {
  isAuthenticated: boolean;
  user: any;
  token: string;
  isAdmin: boolean;
};

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
  token: "",
  isAdmin: false,
};

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<any>) {
      const { token, user } = action.payload;
      state.isAuthenticated = true;
      state.user = user;
      state.token = token;
      state.isAdmin = user.role === 'Admin'

      localStorage.setItem("speedy_token", token);
      axiosInstance.defaults.headers.Authorization = "Bearer " + token;
      Cookies.set("speedy_token", token, { expires: 7 });
    },
    logout(state) {
      Cookies.remove("speedy_token");
      localStorage.removeItem("speedy_token");
      sessionStorage.setItem("didLogout", "true");

      if (axiosInstance.defaults.headers) {
        axiosInstance.defaults.headers.Authorization = "";
      }

      state.isAuthenticated = false;
      state.user = null;
      state.token = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
