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
                    <div className="blog-container-col60-middle">
                        {posts.slice(0, 6).map(post => (
                            <MiddlePost
                              post={post}
                            />
                        ))}
                    </div>
                </div>
                <div className="blog-container-col40">
                    {posts.slice(6, 11).map(post => (
                        <SmallPost post={post}/>
                    ))}
                </div>

            </div>
            <Pagination/>
        </div>
    )
}

export default MainPage
