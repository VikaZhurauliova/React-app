import {useContext} from "react";
import {PostsContext} from "../../context/posts";

import LargePost from "./largePost/largePost";
import MiddlePost from "./middlePost/middlePost";
import SmallPost from "./smallPost/smallPost";

import './blog.scss'

const Blog = () => {
  const { posts } = useContext(PostsContext);

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
