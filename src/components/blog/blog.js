import LargePost from "./largePost/largePost";
import MiddlePost from "./middlePost/middlePost";
import SmallPost from "./smallPost/smallPost";

import './blog.scss'
import {useContext} from "react";
import {PostsContext} from "../../context/posts";

const Blog = () => {
  const { posts } = useContext(PostsContext);

    return (
        <div className="container">
            <div className="blog-container">
                {/*<div className="blog-container-col60">*/}
                {/*    <LargePost posts={posts} setPosts={setPosts}/>*/}
                {/*    <MiddlePost  posts={posts} setPosts={setPosts}/>*/}
                {/*</div>*/}
                {/*<SmallPost posts={posts} setPosts={setPosts}/>*/}
            </div>
        </div>
    );
}
export default Blog
