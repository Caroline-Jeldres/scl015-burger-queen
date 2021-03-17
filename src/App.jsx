// import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
  } from 'react-router-dom'
import Mesero from './components/Mesero/Mesero';
import Home from './components/Home/Home';
import Cocina from './components/Cocina/Cocina';

function App() {
  return (
       <Router>
         {/* <Link to="/">Inicio</Link>
         <Link to="/Mesero" >Mesera</Link>
         <Link to="/Cocina">Cocina</Link> */}
         <Switch>
         <Route exact path="/">
            <Home></Home>
           </Route>
           <Route path="/Mesero" > 
            <Mesero></Mesero>
            
           </Route>
           <Route path="/Cocina"> 
           <Cocina></Cocina>
            
           </Route>
           
         </Switch>
       </Router>
  );
}

export default App;
