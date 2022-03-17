import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import axios from "../axios";
import requests from '../Requests';

export const getMovies = createAsyncThunk("movies/getMovies", async (search) => {
    const response = await axios(requests.searchMovies + search);
    return response.data.Search;
});


export const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        movieList: [],
        status: 'idle',
    },
    reducers: {},
    extraReducers: {
        [getMovies.pending]: (state, action) => {
            state.status = 'loading';
        },
        [getMovies.fulfilled]: (state, action) => {
            state.movieList = action.payload;
            state.status = 'succeeded';
        },
        [getMovies.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export default movieSlice.reducer;