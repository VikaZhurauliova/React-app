import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";

import { ReactComponent as Like } from '../../../assets/svg/Like.svg';
import { ReactComponent as Dislike } from '../../../assets/svg/Down.svg';
import { ReactComponent as Bookmark } from '../../../assets/svg/Bookmark.svg';
import { ReactComponent as Ellipsis } from '../../../assets/svg/More-Horizontal.svg';

import './smallPost.scss'
import {setFavorites} from "../../../stores/posts";

const SmallPost = ({ posts}) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.posts.favorites)
    const isFavorite = useCallback((id) => favorites.some((element) => id === element.id), [favorites]);
    return (
            <div key={posts.id}>
                <div className="blog-container-col40-small">
                    <div className="blog-container-col40-small-description">
                        <div className="blog-container-col40-small-description-date">
                            {posts?.date}
                        </div>
                        <h2 className="blog-container-col40-large-description-title">
                            {posts?.title}
                        </h2>
                    </div>
                    <img src={posts?.image} className="blog-container-col40-small-image"></img>
                    <div className="blog-container-col60-large-footer">
                        <div className="blog-container-col60-large-footer-marks">
                            <div className="blog-container-col60-large-footer-marks-like">
                                <Like/>
                                <p className="blog-container-col60-large-footer-marks-like-count">{posts?.lesson_num}</p>
                            </div>
                            <Dislike/>
                        </div>
                        <div className="blog-container-col60-large-footer-marks">
                            <Bookmark className={`favorites ${isFavorite(posts.id) ? "favorites--active" : ""} `}
                                      onClick={() => dispatch(setFavorites(posts.id))}
                            />
                            <Ellipsis/>
                        </div>
                    </div>
                    <hr className="under-line"/>
                </div>
            </div>
    )
}

export default SmallPost
