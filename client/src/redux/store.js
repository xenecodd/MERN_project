import { configureStore } from '@reduxjs/toolkit'
import { authReducer } from './reducers/auth.js'
import { modalReducer } from './reducers/modal';
import {postReducer} from './reducers/post.js';

// Automatically adds the thunk middleware and the Redux DevTools extension




export default configureStore({
  // Automatically calls `combineReducers`
  reducer:{
    auth : authReducer,
    modal: modalReducer,
    posts: postReducer
  }
  })