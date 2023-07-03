import { ReactComponent as ArrowLeft} from '../../assets/svg/arrow-left.svg'
import { ReactComponent as ArrowRight} from '../../assets/svg/arrow-right.svg'

import './pagination.scss'

const Pagination = () => {

    return (
        <div className="pagination">
            <div className="pagination-size">
                <ArrowLeft/>
                <p className="pagination-size-text">Prev</p>
            </div>
            <div className="pagination-number">
                <a>1</a>
                <a>2</a>
                <a>3</a>
                <a>...</a>
                <a>6</a>
            </div>
            <div className="pagination-size">
                <ArrowRight/>
                <p className="pagination-size-text">Next</p>
            </div>
        </div>
    )
}
export default Pagination