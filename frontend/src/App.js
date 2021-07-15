import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Movies from "./components/Movies"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={(props) => <Home/>}/>
        <Route exact path='/movies' render={(props) => <Movies/>}/>
      </Switch>
    </div>
  );
}

export default App;
