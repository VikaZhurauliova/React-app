import {useContext, useMemo} from "react";
import {PostsContext} from "../../context/posts";
import SmallPost from "../../components/blog/smallPost/smallPost";

const SearchResult = () => {
    const {posts, search} = useContext(PostsContext);
    const filteredPosts = useMemo(() => {
        if (!search) {
            return posts;
        }
        return posts.filter((post) =>  post.title.toLowerCase().includes(search.toLowerCase()))
    }, [search, posts]);

    return (
        <>
            {filteredPosts.map((post) => (
                <SmallPost posts={[ post ]} key={post.id}/>
            ))}
        </>
    )
}
export default SearchResult;
