import {useEffect, useState} from "react";

const usePosts = () => {
    const [ posts, setPosts ] = useState([]);

    useEffect(() => {
        const getPosts = async () => {
            try {
                const urlParams = new URLSearchParams({
                    limit: 15,
                    offset: 1,
                });
                const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by//blog/posts?' + urlParams)
                    .then(response => response.json())
                setPosts(postsResponse)
            } catch (e) {
                console.error(e);
            }
        }
        console.log(posts)
        getPosts();


    }, []);

    const likePost = (id) => {
        // like post
    }

    return {
        posts,
        setPosts
    };
}

export default usePosts