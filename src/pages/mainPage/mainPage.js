import {useContext} from "react";
import {PostsContext} from "../../context/posts";

import Tabs from "../../components/tabs/tabs";
import MiddlePost from "../../components/blog/middlePost/middlePost";
import SmallPost from "../../components/blog/smallPost/smallPost";
import Footer from "../../components/footer/footer";
import Pagination from "../../components/pagination/pagination";

import './mainPage.scss'
const MainPage = () => {
    const { posts } = useContext(PostsContext);

    return (
        <div className="container">
            <Tabs/>
            <div className="blog-container">
                <div className="blog-container-col60">
                    <MiddlePost  posts={posts} />
                </div>
                <SmallPost posts={posts} />
            </div>
            <Pagination/>
            <Footer/>
        </div>
    )
}

export default MainPage