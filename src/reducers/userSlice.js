import { createSlice } from "@reduxjs/toolkit";


const initialState={
    user:''
}

const userSlice=createSlice({
    name:'User',
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.user=action.payload
            console.log(action.payload)
        },
        logoutUser:(state)=>{
            state.user=''
        }
    }
})

export const userReducer=userSlice.reducer
export const {setUser,logoutUser}=userSlice.actions