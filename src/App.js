import RoutesComponent from "./routes";
import {useSelector} from "react-redux";

import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";
import SearchResult from "./pages/searchResult/searchResult";

import './App.scss';

function App() {
    const {theme} = useSelector(state => state.theme);
    const user = {
        firstName: "Nick",
        lastName: "Denskiy"
    }

    return (
        <div className={`App App-${theme}`}>
            <Menu user={user}/>
            <SearchResult />
            <RoutesComponent/>
            <Footer/>
        </div>
    )
}

export default App;
