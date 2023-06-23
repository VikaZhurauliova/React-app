import {useState} from "react";

import Menu from "./components/menu/menu";
import Tabs from "./components/tabs/tabs";
import { TABS } from "./constants/tabs";
import Blog from "./components/blog/blog";

import './App.scss';

function App() {
    const [ activeTab, setActiveTab ] = useState(TABS[0]?.key);
    const user = {
    firstName: "Nick",
    lastName: "Denskiy"
    }
  return(
      <div className="App">
        <Menu user={user}/>
          <div className="container">
              <Tabs activeTab={activeTab} setActiveTab={setActiveTab} tabs={TABS} />
              <Blog/>
          </div>

      </div>
  )
}

export default App;
