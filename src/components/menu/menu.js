import MenuButton from "./menuButton/menuButton";
import MenuSearch from "./menuSearch/menuSearch";
import UserProfile from "./UserProfile/userProfile";
import ThemeToggle from "../themeToggle/themeToggle";


import './menu.scss'

const Menu = ({user}) => {
    return (
        <div className="menu">
            <MenuButton />
            <div className="menu-search-user">
                <MenuSearch />
                <ThemeToggle/>
                <UserProfile user={user} />
            </div>
        </div>
    )
}
export default Menu