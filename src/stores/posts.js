import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk(
    'posts/fetchPosts',
    async () => {
        // Здесь только логика запроса и возврата данных
        // Никакой обработки ошибок
        const urlParams = new URLSearchParams({
            limit: 30, // count of elements on page
            offset: 1, // page number
        });// limit=11&offset=1
        const {results: postsResponse} = await fetch('https://studapi.teachmeskills.by/blog/posts?' + urlParams)
            .then(response => response.json());
        return postsResponse;
    }
);

const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        search: '',
        favorites: [],
        likes: [],
        dislikes: [],
    },
    reducers: {
        setPosts: (state, action) => {
            state.posts = action.payload;
        },
        setSearch: (state, action) => {
            state.search = action.payload
        },
        setFavorites: (state, action) => {
            // state.favorites = action.payload
            const postId = action.payload

            if (state.favorites.length > 0) {
                const samePostIndex = state.favorites.findIndex((element) => postId === element.id)
                if (samePostIndex !== -1) {
                    state.favorites.splice(samePostIndex, 1);
                    return
                }
            }

            const post = state.posts.find((element) => postId === element.id)
            state.favorites.push(post);
        },
        setLikes: (state, action) => {
            const postId = action.payload

            if (state.likes.length > 0) {
                const samePostIndex = state.likes.findIndex((element) => postId === element.id)
                if (samePostIndex !== -1) {
                    state.likes.splice(samePostIndex, 1);
                    return
                }
            }

            const post = state.posts.find((element) => postId === element.id)
            state.likes.push(post);
        },
        setDislikes: (state, action) => {
            const postId = action.payload

            if (state.dislikes.length > 0) {
                const samePostIndex = state.dislikes.findIndex((element) => postId === element.id)
                if (samePostIndex !== -1) {
                    state.dislikes.splice(samePostIndex, 1);
                    return
                }
            }

            const post = state.posts.find((element) => postId === element.id)
            state.dislikes.push(post);
        },
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
export const {setPosts, setSearch, setFavorites, setLikes, setDislikes} = postsSlice.actions;
// Export the reducer, either as a default or named export
export default postsSlice.reducer;

// const setPosts = (value) => {
//   postsSlice.reducers.setPosts(postsSlice.reducer, { type: `${postsSlice.name}/setPosts`, payload: value })
// }
