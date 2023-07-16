import {useSelector} from "react-redux";

import LargePost from "./largePost/largePost";
import MiddlePost from "./middlePost/middlePost";
import SmallPost from "./smallPost/smallPost";

import './blog.scss'

const Blog = () => {
    const {posts} = useSelector(state => state.posts);

    return (
        <div className="container">
            <div className="blog-container">
                <div className="blog-container-col60">
                    <LargePost posts={posts}/>
                    <MiddlePost posts={posts}/>
                </div>
                <SmallPost posts={posts}/>
            </div>
        </div>
    );
}
export default Blog
