import { createSlice } from "@reduxjs/toolkit";
import {THEME} from "../constants/theme";


const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        theme: THEME.light,
    },
    reducers: {
        setTheme: (state, action) => {
            state.theme = action.payload;
        },
    },
});

// Extract and export each action creator by name
export const { setTheme } = themeSlice.actions;
// Export the reducer, either as a default or named export
export default themeSlice.reducer;

// const setPosts = (value) => {
//   postsSlice.reducers.setPosts(postsSlice.reducer, { type: `${postsSlice.name}/setPosts`, payload: value })
// }