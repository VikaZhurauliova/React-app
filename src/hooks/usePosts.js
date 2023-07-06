import {useEffect} from "react";
import {setPosts} from "../stores/posts";
import {useDispatch, useSelector} from "react-redux";

let isPostInProcess = false
const usePosts = () => {
  const {posts} = useSelector(state => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {

    const getPosts = async () => {
      isPostInProcess = true;
      try {
        const urlParams = new URLSearchParams({
          limit: 15,
          offset: 1,
        });
        const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by//blog/posts?' + urlParams)
          .then(response => response.json())
        dispatch(setPosts(postsResponse))
      } catch (e) {
        console.error(e);
      }
    }

    if(!isPostInProcess) {
      getPosts();
    }

  }, []);

  const likePost = (id) => {
    // like post
  }

  return {
    posts,
    setPosts
  };
}

export default usePosts;
