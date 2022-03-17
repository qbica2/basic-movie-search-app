import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./Searchslice";
import movieReducer from "./Movielistslice";

export const store = configureStore({
    reducer: {
        search: searchReducer,
        movie: movieReducer,
    },
});