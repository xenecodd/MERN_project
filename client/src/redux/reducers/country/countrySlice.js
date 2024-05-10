import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'









export const getCountry = createAsyncThunk(
  'getCountry',
  async () => {
    const {data} = await axios.get('http://localhost:5000')
    return data
  })

const initialState = {
        loading : false,
        country : 0
}

export const countrySlicer = createSlice({
        name :"country",
        initialState,
        reducers:{

        },
        extraReducers : (builder) => {
                builder.addCase(getCountry.rejected, (state, action) => {
                        state.loading = 'reject'
                })
                builder.addCase(getCountry.pending, (state, action) => {
                        state.loading = 'loading'
                })
                builder.addCase(getCountry.fulfilled, (state, action) => {
                        state.country = action.payload
                        state.loading = 'OK'
                })



        }
})
export default countrySlicer.reducer