import { ReactComponent as Like } from '../../../assets/svg/Like.svg';
import { ReactComponent as Dislike } from '../../../assets/svg/Down.svg';
import { ReactComponent as Bookmark } from '../../../assets/svg/Bookmark.svg';
import { ReactComponent as Ellipsis } from '../../../assets/svg/More-Horizontal.svg';


import './smallPost.scss'
const SmallPost = ({posts, setPosts}) => {

    return (
        <div className="blog-container-col40">
            {posts.slice(5, 10).map(item => (
                <div key={item.id}>
                    <div className="blog-container-col40-small">
                        <div className="blog-container-col40-small-description">
                            <div className="blog-container-col40-small-description-date">
                                {item?.date}
                            </div>
                            <h2 className="blog-container-col40-large-description-title">
                                Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...
                            </h2>
                        </div>
                        <img src={item?.image} className="blog-container-col40-small-image"></img>
                        <div className="blog-container-col60-large-footer">
                            <div className="blog-container-col60-large-footer-marks">
                                <div className="blog-container-col60-large-footer-marks-like">
                                    <Like/>
                                    <p className="blog-container-col60-large-footer-marks-like-count">20</p>
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
                </div>
            ))}
        </div>
    )
}

export default SmallPost