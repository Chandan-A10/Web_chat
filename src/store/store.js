import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "../reducers/userSlice";
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const config={
    key:'root',
    storage,
}

const rootreducer=persistReducer(config,userReducer)

export const store=configureStore({
    reducer:rootreducer
})

export const persistor=persistStore(store)