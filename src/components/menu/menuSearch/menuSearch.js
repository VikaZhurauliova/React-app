import {useContext, useState} from "react";

import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import {PostsContext} from "../../../context/posts"


import './menuSearch.scss'


const MenuSearch = () => {
    const [ isInputShown, setIsInputShown ] = useState(false);
    const { search, setSearch } = useContext(PostsContext)

    return (
        <div className="menuSearch">
            {isInputShown &&
                (<input
                    className="menuSearch-input"
                    value={search}
                    onChange={(event) => setSearch(event.target.value)}
                    placeholder="Search..."
                />)}
            <button onClick={() => setIsInputShown(!isInputShown)} className="btn-custom">
                {isInputShown ? <CrossIcon/> : <SearchIcon/>}
            </button>
        </div>
    )
}
export default MenuSearch
