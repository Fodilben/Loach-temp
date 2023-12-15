import { autoBatchEnhancer, createSlice } from "@reduxjs/toolkit";
import { json } from "react-router-dom";

import { toast } from "react-toastify";
import { CustomFetch } from "../../utils";
const themes = {
  winter: "winter",
  dracula: "dracula",
};
const getThem = () => {
  const theme = localStorage.getItem("theme") || "winter";
  document.documentElement.setAttribute("data-theme", theme);
  return theme;
};
const getUserFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("user")) || null;
};
const initialState = {
  user: getUserFromLocalStorage(),
  theme: getThem(),
};
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    LoginUser: (state, action) => {
      const user = { ...action.payload.user, token: action.payload.jwt };
      state.user = user;
      localStorage.setItem("user", JSON.stringify(state.user));
    },
    LogoutUser: (state, Action) => {
      state.user = null;
      localStorage.removeItem("user");
      toast.success("log out ");
    },
    ToggleThem: (state, Action) => {
      const { winter, dracula } = themes;
      state.theme = state.theme === winter ? dracula : winter;
      document.documentElement.setAttribute("data-theme", state.theme);
      localStorage.setItem("theme", state.theme);
    },
  },
});
export const { LoginUser, LogoutUser, ToggleThem } = userSlice.actions;
export default userSlice.reducer;
// localStorage.clear();
