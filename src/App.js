import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Navegacion/NavBar';
import Inicio from './Components/Paginas/Inicio';
import Items from './Components/Paginas/Items';
import ItemListContainer from './Components/Paginas/ItemListContainer';
import ItemCount from './Components/ItemCount';

function App() {
  return (
    <div className="App">
    <Router>
      <NavBar id="Pastis Desayunos" option= "Clásico, premium, infantil" />
      <Switch>
        <Route path='/' exact component={Inicio}/> 
        <Route path='/Items' component={Items}/>
        <Route path='/ItemListContainer' component={ItemListContainer}/>        
        <Route path='/ItemCount' component={ItemCount}/>        
      </Switch>
    </Router>
    </div>
  );
}

export default App;