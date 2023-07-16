import RoutesComponent from "./routes";

import Menu from "./components/menu/menu";
import Footer from "./components/footer/footer";

import './App.scss';
import {useSelector} from "react-redux";

function App() {
    const {theme} = useSelector(state => state.theme);
    const user = {
        firstName: "Nick",
        lastName: "Denskiy"
    }

    return (
        <div className={`App App-${theme}`}>
            <Menu user={user}/>
            <RoutesComponent/>
            <Footer/>
        </div>
    )
}

export default App;
