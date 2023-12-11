
import './App.css';
import Data from './DataBase/Data';
import Players from './components/Players';
import PlayerList from './components/PlayerList';
function App() {
  return (
    <div className="App">
     <PlayerList/>
     <Players/>

    </div>
  );
}

export default App;
