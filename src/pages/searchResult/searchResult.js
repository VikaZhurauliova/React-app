import {useMemo} from "react";

import SmallPost from "../../components/blog/smallPost/smallPost";
import {useSelector} from "react-redux";

const SearchResult = () => {
    const {posts, search} = useSelector(state => state.posts);
    const filteredPosts = useMemo(() => {
        if (!search) {
            return posts;
        }
        return posts.filter((post) => post.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, posts]);

    return (
        <>
            {filteredPosts.map((post) => (
                <SmallPost posts={[post]}/>
            ))}
        </>
    )
}
export default SearchResult;
