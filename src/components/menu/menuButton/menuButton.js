import { useState } from "react";

import { ReactComponent as BurgerIcon } from '../../../assets/svg/burgerIcon.svg';
import { ReactComponent as CrossIcon } from '../../../assets/svg/cross.svg';

import './menuButton.scss'


const MenuButton = (props) => {
  const [nav, setNav] = useState(false);
  let testValue = 'test';
  const updateState = () => {
    setNav(!nav);
    testValue += '_1';
    console.log(testValue);
  }

  return (
    <button onClick={() => updateState()} className="menuButton btn-custom">
      {nav ? <CrossIcon/> : <BurgerIcon/>}
    </button>
  );
}
export default MenuButton
