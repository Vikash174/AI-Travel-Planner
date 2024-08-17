import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface UserState {
    userData : UserData | null;
    isLoggedIn: boolean;
}
interface  UserData{
    id: string;
    name: string;
    email: string;
}
const initialState : UserState = {
    userData: null,
    isLoggedIn: false
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
      setUser:(state, action:PayloadAction<UserData>) => {
          state.userData = action.payload;
          state.isLoggedIn = true;
      },
      logoutUser: (state) =>{
        state.userData = null;
        state.isLoggedIn = false;
      }
    }
});


export const {setUser, logoutUser}  = userSlice.actions;
export default userSlice.reducer;