import Menu from "./components/menu/menu";
import Tabs from "./components/tabs/tabs";
import './App.scss';

function App() {
  const user = {
    firstName: "Nick",
    lastName: "Denskiy"
  }
  return(
      <div className="App">
        <Menu user={user}/>
        <Tabs />
      </div>
  )
}

export default App;
