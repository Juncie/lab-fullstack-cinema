import logo from './logo.svg';
import './App.css';
import { Route, Link, Switch } from 'react-router';
import Home from './components/Home';
import MovieList from './components/MovieList';

function App() {
  return (
  <div>
    
    <Switch>
      
      <Route exact path="/" render={() => <Home />} />
      <Route exact path="/MoviesList" render={() => <MovieList />} />
      
      
    </Switch>
  


  </div>
    

   
  );
}

export default App;
