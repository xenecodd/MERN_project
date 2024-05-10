import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counter/counter'
import countrySlicer from './reducers/country/countrySlice'

// Automatically adds the thunk middleware and the Redux DevTools extension
export default configureStore({
  // Automatically calls `combineReducers`
  reducer:{
    counter : counterReducer,
    country : countrySlicer 
  }
  })