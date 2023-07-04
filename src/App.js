import {useState} from "react";
import RoutesComponent from "./routes";

import usePosts from "./hooks/usePosts";
import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import {PostsContext} from "./context/posts";
import { ThemeContext } from "./context/theme";
import ThemeToggle, { THEME } from "./components/themeToggle/themeToggle";

import './App.scss';

function App() {
    const { posts, setPosts } = usePosts()
    const [ theme, setTheme ] = useState(THEME.light);
    const [search, setSearch] = useState("");
    const user = {
    firstName: "Nick",
    lastName: "Denskiy"
    }

  return(
      <ThemeContext.Provider value={[theme ,setTheme]}>
          <PostsContext.Provider value={{ posts, search, setSearch }}>
              <div className={`App App-${theme}`}>
                  <Menu user={user}/>
                  <RoutesComponent/>
                  <Footer/>
              </div>
          </PostsContext.Provider>
      </ThemeContext.Provider>

  )
}

export default App;
