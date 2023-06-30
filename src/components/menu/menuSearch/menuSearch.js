import { ReactComponent as SearchIcon } from '../../../assets/svg/search.svg';

import './menuSearch.scss'
import {useState} from "react";
const MenuSearch = () => {

    const [ isInputShown, setIsInputShown ] = useState(false);

    return (
        <div className="menuSearch">
            {/*{isInputShown &&*/}
            {/*    <input>*/}
            {/*}*/}
            {/*<button onCLick= className="btn-custom">*/}
            {/*    <SearchIcon />*/}
            {/*</button>*/}
        </div>
    )
}
export default MenuSearch