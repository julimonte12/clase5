import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Navegacion/NavBar';
import Inicio from './Components/Paginas/Inicio';
import Items from './Components/Paginas/Items';


function App() {
  return (
    <div className="App">
    <Router>
      <NavBar/>
      <Switch>
        <Route path='/' exact component={Inicio}/> 
        <Route path='/Items' component={Items}/>        
       
      </Switch>
    </Router>
    </div>
  );
}

export default App;