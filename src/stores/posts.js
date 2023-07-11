import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        // Здесь только логика запроса и возврата данных
        // Никакой обработки ошибок
        const urlParams = new URLSearchParams({
            limit: 11, // count of elements on page
            offset: 1, // page number
        });// limit=11&offset=1
        const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by/blog/posts?' + urlParams)
            .then(response => response.json());
        return postsResponse;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        search: '',
        bookmarks: []
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
            console.log(action)
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setBookmaks: (state, action) => {
            state.bookmarks = action.payload
        }
    },

    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        builder
            .addCase(fetchPosts.pending, (state) => {
                state.status = 'pending'
            })
            .addCase(fetchPosts.fulfilled, (state, action) => {
                // Add posts to the state array
                state.posts = action.payload;
                state.status = 'succeeded';
            })
            .addCase(fetchPosts.rejected, (state) => {
                state.status = 'failed';
            })
    },
});

// Extract and export each action creator by name
export const { setPosts, setSearch } = postsSlice.actions;
// Export the reducer, either as a default or named export
export default postsSlice.reducer;

// const setPosts = (value) => {
//   postsSlice.reducers.setPosts(postsSlice.reducer, { type: `${postsSlice.name}/setPosts`, payload: value })
// }
