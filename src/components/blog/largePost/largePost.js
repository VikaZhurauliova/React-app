import { ReactComponent as Like } from '../../../assets/svg/Like.svg';
import { ReactComponent as Dislike } from '../../../assets/svg/Down.svg';
import { ReactComponent as Bookmark } from '../../../assets/svg/Bookmark.svg';
import { ReactComponent as Ellipsis } from '../../../assets/svg/More-Horizontal.svg';

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
                    Astronauts prep for new solar arrays on nearly seven-hour spacewalk ...
                </h2>
                <p className="blog-container-col60-large-description-text">
                    Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.
                </p>
            </div>
            <img src={posts[0]?.image} className="blog-container-col60-large-image"></img>
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
    )
}

export default LargePost