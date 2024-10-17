import { configureStore } from '@reduxjs/toolkit';
import { userReducer } from "./Reducer/reducer";


export const store = configureStore({
  reducer: {
    user: userReducer
  }
});

//  server url 
export const server = "http://localhost:8080";