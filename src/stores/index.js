import {configureStore} from "@reduxjs/toolkit";

import postReducer from './posts'
import themeReducer from './theme'
export default configureStore({
    reducer: {
        posts: postReducer,
        theme: themeReducer
    }


})