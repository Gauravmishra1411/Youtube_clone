import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    isMenuOpen: true,
  },
  // action
  reducers: {
    toggleMenu: (state) => {
      state.isMenuOpen = !state.isMenuOpen;
    },
    closeMenu:(state)=>{
      state.isMenuOpen=false
    }
    // closeMenu: (state) => {
    //   state.isMenuOpen = false;
    // },
  },
});

export const { toggleMenu ,closeMenu} = appSlice.actions;
export default appSlice.reducer;
