import {useState, useEffect} from "react";

import { ReactComponent as Like } from '../../assets/svg/Like.svg';
import { ReactComponent as Dislike } from '../../assets/svg/Down.svg';
import { ReactComponent as Bookmark } from '../../assets/svg/Bookmark.svg';
import { ReactComponent as Ellipsis } from '../../assets/svg/More-Horizontal.svg';


import './blog.scss'
import LargePost from "./largePost/largePost";
import MiddlePost from "./middlePost/middlePost";
import SmallPost from "./smallPost/smallPost";

const Blog = () => {
    const [ posts, setPosts ] = useState([]);

        useEffect(() => {
            const getPosts = async () => {
                try {
                    const urlParams = new URLSearchParams({
                        limit: 11,
                        offset: 1,
                    });
                    const { results: postsResponse } = await fetch('https://studapi.teachmeskills.by//blog/posts?' + urlParams)
                        .then(response => response.json())
                    setPosts(postsResponse)
                } catch (e) {
                    console.error(e);
                }
            }
            getPosts();
        console.log(posts)

    }, [])
    return (
        <div className="container">
            <div className="blog-container">
                <div className="blog-container-col60">
                    <LargePost posts={posts} setPosts={setPosts}/>
                    <MiddlePost  posts={posts} setPosts={setPosts}/>
                </div>
                    <SmallPost posts={posts} setPosts={setPosts}/>
            </div>
        </div>

    );
}

export default Blog