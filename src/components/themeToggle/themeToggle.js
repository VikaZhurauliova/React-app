import {useMemo} from "react";

import {useTheme} from "../../hooks/useTheme";
import {THEME} from "../../constants/theme";

import './themeToggle.scss';

const ThemeToggle = () => {
    const {theme, setTheme} = useTheme()
    const isLightTheme = useMemo(() => theme === THEME.light, [theme])

    return (
        <div className="menuTheme">
            <button
                className={`theme-toggle theme-toggle-${theme}`}
                onClick={() => setTheme(isLightTheme ? THEME.dark : THEME.light)}
            >
                {isLightTheme ? 'Dark' : 'Light'}
            </button>
        </div>
    )
}

export default ThemeToggle;