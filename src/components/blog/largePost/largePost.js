import {ReactComponent as Like} from '../../../assets/svg/Like.svg';
import {ReactComponent as Dislike} from '../../../assets/svg/Down.svg';
import {ReactComponent as Bookmark} from '../../../assets/svg/Bookmark.svg';
import {ReactComponent as Ellipsis} from '../../../assets/svg/More-Horizontal.svg';

import './largePost.scss'
import '../blog.scss'

const LargePost = ({posts, setPosts}) => {

    return (
        <div className="blog-container-col60-large">
            <div className="blog-container-col60-large-description">
                <div className="blog-container-col60-large-description-date">
                    {posts[0]?.date}
                </div>
                <h2 className="blog-container-col60-large-description-title">
                    {posts[0]?.title}
                </h2>
                <p className="blog-container-col60-large-description-text">
                    {posts[0]?.description}
                </p>
            </div>
            <img src={posts[0]?.image} className="blog-container-col60-large-image"></img>
            <div className="blog-container-col60-large-footer">
                <div className="blog-container-col60-large-footer-marks">
                    <div className="blog-container-col60-large-footer-marks-like">
                        <Like/>
                        <p className="blog-container-col60-large-footer-marks-like-count">{posts[0]?.lesson_num}</p>
                    </div>
                    <Dislike/>
                </div>
                <div className="blog-container-col60-large-footer-marks">
                    <Bookmark/>
                    <Ellipsis/>
                </div>
            </div>
            <hr className="under-line"/>
        </div>
    )
}

export default LargePost