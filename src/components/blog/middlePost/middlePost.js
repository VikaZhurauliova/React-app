
import { ReactComponent as Like } from '../../../assets/svg/Like.svg';
import { ReactComponent as Dislike } from '../../../assets/svg/Down.svg';
import { ReactComponent as Bookmark } from '../../../assets/svg/Bookmark.svg';
import { ReactComponent as Ellipsis } from '../../../assets/svg/More-Horizontal.svg';
import {setFavorites} from "../../../stores/posts";

import '../blog.scss'
import './middlePost.scss'
import {useDispatch, useSelector} from "react-redux";
import {useCallback} from "react";


const MiddlePost = ({posts}) => {
    const dispatch = useDispatch();
    const favorites = useSelector((state) => state.posts.favorites)
    const isFavorite = useCallback((id) => favorites.some((element) => id === element.id ), [favorites]);
    return (
        <div className="blog-container-col60-middle">
            {posts.slice(1, 7).map(item => (
                <div className="blog-container-col60-middle-cell" key={item.id}>
                    <img src={item?.image} className="blog-container-col60-middle-cell-image"></img>
                    <div className="blog-container-col60-middle-cell-description">
                        <div className="blog-container-col60-middle-cell-description-date">
                            {item?.date}
                        </div>
                        <h2 className="blog-container-col60-middle-cell-description-title">
                            {item?.title}
                        </h2>
                    </div>
                    <div className="blog-container-col60-large-footer">
                        <div className="blog-container-col60-large-footer-marks">
                            <button className="btn-custom blog-container-col60-large-footer-marks-like">
                                <Like/>
                                <p className="blog-container-col60-large-footer-marks-like-count">{item.lesson_num}</p>
                            </button>
                            <button className="btn-custom blog-container-col60-large-footer-marks-like">
                                <Dislike/>
                                <p className="blog-container-col60-large-footer-marks-like-count">{item.lesson_num }</p>
                            </button>
                        </div>
                        <div className="blog-container-col60-large-footer-marks">
                            <Bookmark  className={`favorites ${isFavorite(item.id) ? "favorites--active" : ""} `} onClick={() => dispatch(setFavorites(item.id))}/>
                            <Ellipsis/>
                        </div>
                    </div>
                    <hr className="under-line-middle"/>
                </div>
            ))}
        </div>
    )
}

export default MiddlePost