import {useContext, useState} from "react";
import {PostsContext} from "../../context/posts";

import LargePost from "./largePost/largePost";
import MiddlePost from "./middlePost/middlePost";
import SmallPost from "./smallPost/smallPost";

import './blog.scss'

const Blog = () => {
  const { posts } = useContext(PostsContext);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDisLikeCount] = useState(0);

    return (
        <div className="container">
            <div className="blog-container">
                <div className="blog-container-col60">
                    <LargePost posts={posts} />
                    <MiddlePost  posts={posts} />
                </div>
                <SmallPost posts={posts} />
            </div>
        </div>
    );
}
export default Blog
