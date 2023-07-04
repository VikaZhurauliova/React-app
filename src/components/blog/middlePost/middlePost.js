import {useState} from "react";

import { ReactComponent as Like } from '../../../assets/svg/Like.svg';
import { ReactComponent as Dislike } from '../../../assets/svg/Down.svg';
import { ReactComponent as Bookmark } from '../../../assets/svg/Bookmark.svg';
import { ReactComponent as Ellipsis } from '../../../assets/svg/More-Horizontal.svg';

import '../blog.scss'
import './middlePost.scss'
import useCounter from "../../../hooks/useCounter";


const MiddlePost = ({posts}) => {
    const {counter, incrementCounter} = useCounter()
    const [dislikeCount, setDislikeCount] = useState(0);

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
                            <button className="btn-custom blog-container-col60-large-footer-marks-like"
                                    onClick={() => {counter > 0 ? incrementCounter(0) : incrementCounter()}}
                            >
                                <Like/>
                                <p className="blog-container-col60-large-footer-marks-like-count">{counter}</p>
                            </button>
                            <button className="btn-custom blog-container-col60-large-footer-marks-like"
                                    onClick={() => {dislikeCount > 0 ? setDislikeCount(0) : setDislikeCount(1)}}
                            >
                                <Dislike/>
                                <p className="blog-container-col60-large-footer-marks-like-count">{dislikeCount}</p>
                            </button>
                        </div>
                        <div className="blog-container-col60-large-footer-marks">
                            <Bookmark/>
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