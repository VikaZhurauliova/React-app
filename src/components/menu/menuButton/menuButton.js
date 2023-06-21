import { ReactComponent as BurgerIcon } from '../../../assets/svg/burgerIcon.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';
import './menuButtoon.scss'
import {useState} from "react";
const MenuButton = () => {
const [nav, setNav] = useState(false)
    return (
        <button onClick={() =>(setNav(!nav))} className="menuButton btn-custom">
            {nav ? <CrossIcon/> : <BurgerIcon/>}
        </button>
    )
}
export default MenuButton