import {useState} from "react";

import Tabs from "../../components/tabs/tabs";
import MiddlePost from "../../components/blog/middlePost/middlePost";
import SmallPost from "../../components/blog/smallPost/smallPost";
import Pagination from "../../components/pagination/pagination";
import usePosts from "../../hooks/usePosts";

import './mainPage.scss'

const MainPage = () => {
    const {posts} = usePosts(state => state.posts);

    return (
        <div className="container">
            <Tabs/>
            <div className="blog-container">
                <div className="blog-container-col60">
                    <MiddlePost
                        posts={posts}
                    />
                </div>
                <SmallPost posts={posts}
                />
            </div>
            <Pagination/>
        </div>
    )
}

export default MainPage