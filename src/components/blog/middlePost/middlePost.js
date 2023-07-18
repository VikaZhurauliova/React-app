import {useDispatch, useSelector} from "react-redux";
import {useCallback, useState} from "react";

import {ReactComponent as Like} from '../../../assets/svg/Like.svg';
import {ReactComponent as Dislike} from '../../../assets/svg/Down.svg';
import {ReactComponent as Bookmark} from '../../../assets/svg/Bookmark.svg';
import {ReactComponent as Ellipsis} from '../../../assets/svg/More-Horizontal.svg';
import {setFavorites, setLikes, setDislikes} from "../../../stores/posts";

import '../blog.scss'
import './middlePost.scss'

const MiddlePost = ({post}) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.posts.favorites)
    const isFavorite = useCallback((id) => favorites.some((element) => id === element.id), [favorites]);

    const likes = useSelector((state) => state.posts.likes)
    const isLike = useCallback((id) => likes.some((element) => id === element.id), [likes]);

    const dislikes = useSelector((state) => state.posts.dislikes)
    const isDislikes = useCallback((id) => dislikes.some((element) => id === element.id), [dislikes]);
    const [likeCount, setLikeCount] = useState(0);
    return (
        <div className="blog-container-col60-middle-cell" key={post.id}>
            <img src={post?.image} className="blog-container-col60-middle-cell-image"></img>
            <div className="blog-container-col60-middle-cell-description">
                <div className="blog-container-col60-middle-cell-description-date">
                    {post?.date}
                </div>
                <h2 className="blog-container-col60-middle-cell-description-title">
                    {post?.title}
                </h2>
            </div>
            <div className="blog-container-col60-large-footer">
                <div className="blog-container-col60-large-footer-marks">
                    <button
                        onClick={() => {
                            likeCount > 0 ? setLikeCount(0) : setLikeCount(1)
                        }}
                        className="btn-custom blog-container-col60-large-footer-marks-like">
                        <Like className={`favorites ${isLike(post.id) ? "favorites--active" : ""} `}
                              onClick={() => dispatch(setLikes(post.id))}
                        />
                        <p className="blog-container-col60-large-footer-marks-like-count">{likeCount}</p>
                    </button>
                    <button className="btn-custom blog-container-col60-large-footer-marks-like">
                        <Dislike
                            className={`favorites ${isDislikes(post.id) ? "favorites--active" : ""} `}
                            onClick={() => dispatch(setDislikes(post.id))}
                        />
                        <p className="blog-container-col60-large-footer-marks-like-count">{post.lesson_num}</p>
                    </button>
                </div>
                <div className="blog-container-col60-large-footer-marks">
                    <Bookmark className={`favorites ${isFavorite(post.id) ? "favorites--active" : ""} `}
                              onClick={() => dispatch(setFavorites(post.id))}
                    />
                    <Ellipsis/>
                </div>
            </div>
            <hr className="under-line-middle"/>
        </div>

    )
}

export default MiddlePost
