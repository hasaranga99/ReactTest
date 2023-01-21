import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';


function App() {
  return (
    <Router>
      <div>
        <Switch>

          <Route exact path='/'>
            <Home/>
          </Route>

          <Route  path='/About'>
            <About/>
          </Route>

          <Route path='/Contact'>
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
