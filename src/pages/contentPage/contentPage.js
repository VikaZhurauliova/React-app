import usePosts from "../../hooks/usePosts";

import { ReactComponent as Like } from '../../assets/svg/Like.svg';
import { ReactComponent as Dislike } from '../../assets/svg/Down.svg';
import { ReactComponent as Bookmark} from '../../assets/svg/Bookmark.svg'
import { ReactComponent as ArrowLeft} from '../../assets/svg/arrow-left.svg'
import { ReactComponent as ArrowRight} from '../../assets/svg/arrow-right.svg'
import Footer from "../../components/footer/footer";

import './contentPage.scss'



const ContentPage = () => {
    const { posts, setPosts } = usePosts()
    return(
        <div className="container">
            <div className="content-page-header">
                <p className="content-page-header-title">Home</p>
                <p className="content-page-header-number">Post 14278</p>
            </div>
            <div className="content-page-post">
                <h1 className="content-page-post-title">{posts[0]?.title}</h1>
            </div>
            <div className="content-page-image-wrap">
                <img src={posts[0]?.image} className="content-page-image"></img>
            </div>
            <div className="content-page-text">
                <p className="content-page-text-main">Astronauts Kayla Barron and Raja Chari floated out of the International Space Station airlock for a spacewalk Tuesday, installing brackets and struts to support new solar arrays to upgrade the research lab’s power system on the same day that crewmate Mark Vande Hei marked his 341st day in orbit, a U.S. record for a single spaceflight.</p>
                <p className="content-page-text-main">During the final days of Alice Neel’s blockbuster solo show at the Metropolitan Museum of Art this summer, the line into the exhibition spanned the length of the museum’s European paintings corridor, and the wait was over half an hour. Titled “People Come First,” the show featured more than 100 gritty cityscapes, domestic interiors, and stripped-down portraits of Neel’s neighbors, friends, and fellow artists in the largest-ever showing of her work in her hometown of New York City.</p>
                <p className="content-page-text-main">The stories tracked Hambling’s trailblazing career while focusing on her current and upcoming projects. The artist’s installation Relic (2021), produced alongside sound recordist Chris Watson, was recently on view at Snape Maltings in London. Meanwhile, this October, portraits by Hambling will be presented at the Italian gallery Thomas Brambilla. The artist’s “Wave Series” is also currently being exhibited in the group show “Summer Exhibition” at Marlborough London, which runs through September 10th.</p>
                <p className="content-page-text-main">The excitement surrounding this exhibition delighted longtime fans of the expressive painter while inspiring a legion of new devotees—a trend matched by Neel’s strengthening position in the art market, especially in the past year. In May, Neel’s 1966 canvas Dr. Finger’s Waiting Room roused a flurry of bids from the United States, Asia, and Europe at Christie’s New York, where it ultimately sold for just over $3 million, breaking both its high estimate and the artist’s auction record. Just hours earlier at Sotheby’s New York, Neel’s double portrait Henry and Sally Hope (1977), depicting an art historian and his wife, sold for just under $1.6 million, notching her third-highest auction result.</p>
                <p className="content-page-text-main">The demand for Maggi Hambling’s evocative portraits and exuberant depictions of seascapes and landscapes surged this past week, when the number of collectors inquiring on her work increased more than tenfold from the week before. The British artist, esteemed for her whirling, gestural paintings and bold public sculptures, has seen a consistent wave of interest in her work that has accelerated in the past few years. This recent uptick in interest  is consistent with Hambling’s career trajectory, which has been punctuated by a flurry of public commissions, institutional recognition, and secondary-market demand.</p>
                <div className="content-page-action">
                    <div className="content-page-action-marks">
                        <div className="content-page-action-marks-like">
                            <Like/>
                        </div>
                        <div className="content-page-action-marks-like">
                            <Dislike/>
                        </div>
                    </div>
                    <div className="content-page-action-favorites">
                        <Bookmark/>
                        <p className="content-page-action-favorites-text">Add to favorites</p>
                    </div>
                </div>
            </div>
            <hr className="content-page-line"/>
            <div className="content-page-nav">
                <div className="content-page-nav-left">
                    <ArrowLeft/>
                    <div className="content-page-nav-left-main">
                        <p className="content-page-nav-left-main-prev">Prev</p>
                        <p className="content-page-nav-left-main-text">10 Things to Know About Salvador Dalí</p>
                    </div>
                </div>
                <div className="content-page-nav-left">
                    <div className="content-page-nav-left-main align-end">
                        <p className="content-page-nav-left-main-prev">Next</p>
                        <p className="content-page-nav-left-main-text">8 Beautiful Villas Belonging to Artists You Need to See</p>
                    </div>
                    <ArrowRight/>
                </div>

            </div>
            <hr className="content-page-line"/>
            <Footer/>
        </div>

    )
}

export default ContentPage