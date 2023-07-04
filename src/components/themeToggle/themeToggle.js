import {useContext, useMemo} from "react";

import { ThemeContext } from "../../context/theme";

import './themeToggle.scss';

export const THEME = {
    light: 'light',
    dark: 'dark'
}

const ThemeToggle = () => {
    const [ theme, setTheme ] = useContext(ThemeContext);

    const isLightTheme = useMemo(() => theme === THEME.light, [ theme ])

    return (
        <div className="menuTheme">
            <button
                className={`theme-toggle theme-toggle-${theme}`}
                onClick={() => setTheme(isLightTheme ? THEME.dark : THEME.light)}
            >
                { isLightTheme ? 'Dark' : 'Light' }
            </button>
        </div>
    )
}

export default ThemeToggle;