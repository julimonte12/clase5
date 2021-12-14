import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './Components/Navegacion/NavBar';
import Inicio from './Components/Paginas/Inicio';
import Items from './Components/Paginas/Items';
import ItemListContainer from './Components/Paginas/ItemListContainer';


function App() {
  return (
    <div className="App">
    <Router>
      <NavBar id="Pastis Desayunos" option= "Clásico, premium, infantil" />
      <Switch>
        <Route path='/' exact component={Inicio}/> 
        <Route path='/Items' component={Items}/>
        <Route path='/ItemListContainer' component={ItemListContainer}/>        
        
       
      </Switch>
    </Router>
    </div>
  );
}

export default App;