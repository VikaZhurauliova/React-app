import { ReactComponent as Like } from '../../../assets/svg/Like.svg';
import { ReactComponent as Dislike } from '../../../assets/svg/Down.svg';
import { ReactComponent as Bookmark } from '../../../assets/svg/Bookmark.svg';
import { ReactComponent as Ellipsis } from '../../../assets/svg/More-Horizontal.svg';

import '../blog.scss'
import './middlePost.scss'

const MiddlePost = ({posts, setPosts}) => {

    return (
        <div className="blog-container-col60-middle">
            {posts.slice(1, 5).map(item => (
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
                            <div className="blog-container-col60-large-footer-marks-like">
                                <Like/>
                                <p className="blog-container-col60-large-footer-marks-like-count">{item?.lesson_num}</p>
                            </div>
                            <Dislike/>
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