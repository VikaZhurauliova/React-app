import {useState} from "react";


import Tabs from "../../components/tabs/tabs";
import MiddlePost from "../../components/blog/middlePost/middlePost";
import SmallPost from "../../components/blog/smallPost/smallPost";
import Pagination from "../../components/pagination/pagination";

import './mainPage.scss'
import {useSelector} from "react-redux";
import usePosts from "../../hooks/usePosts";
const MainPage = () => {
    const { posts } = usePosts(state => state.posts);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDisLikeCount] = useState(0);

    return (
        <div className="container">
            <Tabs/>
            <div className="blog-container">
                <div className="blog-container-col60">
                    <MiddlePost
                        posts={posts} likeCount={likeCount} setLikeCount={setLikeCount} dislikeCount={dislikeCount} setDisLikeCount={setDisLikeCount}/>
                </div>
                <SmallPost  posts={posts} likeCount={likeCount} setLikeCount={setLikeCount} dislikeCount={dislikeCount} setDisLikeCount={setDisLikeCount}/>
            </div>
            <Pagination/>
        </div>
    )
}

export default MainPage