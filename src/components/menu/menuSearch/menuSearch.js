import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg';


import './menuSearch.scss'
const MenuSearch = () => {
    return (
        <div className="menuSearch">
            <button className="btn-custom">
                <SearchIcon />
            </button>
        </div>
    )
}
export default MenuSearch