import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Create from "./components/Create";
import Home from './components/Home';
import Edit from './components/Edit';
import View from './components/View';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add-employee">Add Employee</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
              <Home/>
          </Route>
          <Route path="/add-employee/">
            <Create />
          </Route>
          <Route path="/edit-employee/:id" component={Edit}/>
          <Route path="/view-employee/:id" component={View}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
