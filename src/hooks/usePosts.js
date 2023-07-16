import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {fetchPosts, setPosts} from "../stores/posts";

let isPostInProcess = false
const usePosts = () => {
    const {posts} = useSelector(state => state.posts);
    const dispatch = useDispatch();

    useEffect(() => {

        if (!isPostInProcess) {
            dispatch(fetchPosts())

        }
    }, []);

    // const likePost = (id) => {
    //     // like post
    // }

    return {
        posts,
        setPosts
    };
}

export default usePosts;
