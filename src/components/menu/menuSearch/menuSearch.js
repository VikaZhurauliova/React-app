import { useState} from "react";

import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';

import './menuSearch.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSearch} from "../../../stores/posts";


const MenuSearch = () => {
    const [ isInputShown, setIsInputShown ] = useState(false);
    const { search } = useSelector(state => state.posts);
    const dispatch = useDispatch()
    return (
        <div className="menuSearch">
            {isInputShown &&
                (<input
                    className="menuSearch-input"
                    value={search}
                    onChange={(event) => dispatch(setSearch(event.target.value))}
                    placeholder="Search..."
                />)}
            <button onClick={() => setIsInputShown(!isInputShown)} className="btn-custom">
                {isInputShown ? <CrossIcon/> : <SearchIcon/>}
            </button>
        </div>
    )
}
export default MenuSearch
