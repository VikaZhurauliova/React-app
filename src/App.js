import {useState} from "react";
import RoutesComponent from "./routes";
import {PostsContext} from "./context/posts";

import usePosts from "./hooks/usePosts";
import Menu from "./components/menu/menu";
import Tabs from "./components/tabs/tabs";
import { TABS } from "./constants/tabs";
import Blog from "./components/blog/blog";
import SearchResult from "./pages/searchResult/searchResult";

import './App.scss';
import Input from "./components/form/input/input";
import Button from "./components/button/button";
import SignUp from "./pages/authorization/signUp/signUp";
function App() {
    const { posts, setPosts } = usePosts()
    const [ activeTab, setActiveTab ] = useState(TABS[0]?.key);
    const user = {
    firstName: "Nick",
    lastName: "Denskiy"
    }
    const [search, setSearch] = useState("");

  return(
      <PostsContext.Provider value={{ posts, search, setSearch }}>
          <div className="App">
              <Menu user={user}/>
              {/*<Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />*/}
              {/*<Blog />*/}
              <RoutesComponent/>
              {/*<SearchResult />*/}
          </div>
      </PostsContext.Provider>
  )
}

export default App;
