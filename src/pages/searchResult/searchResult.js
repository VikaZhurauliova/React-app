import {useMemo} from "react";

import SmallPost from "../../components/blog/smallPost/smallPost";
import {useDispatch, useSelector} from "react-redux";
import {fetchPosts} from "../../stores/posts";

const SearchResult = () => {
    const dispatch = useDispatch();
    dispatch(fetchPosts())
    const {posts, search} = useSelector(state => state.posts);
    const filteredPosts = useMemo(() => {
        if (!search) {
            return posts;
        }
        return posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, posts]);
    dispatch(fetchPosts())
    return (
        <>
            {filteredPosts.map((post) => (
                <SmallPost posts={[post]}/>
            ))}
        </>
    )
}
export default SearchResult;
