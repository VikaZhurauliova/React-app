import './App.css';

function App() {
  const user = {
    firstName: "Nick",
    lastName: "Denskiy"
  }
  return (
    <div className="App">
      <Menu user={user}/>
    </div>
  );
}

export default App;
