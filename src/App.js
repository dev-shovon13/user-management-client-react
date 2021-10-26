import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header';
import Users from './components/Users';
import AddUser from './components/AddUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/AddUser">
            <AddUser />
          </Route>
          <Route path="/UpdateUser/:id">
            <UpdateUser />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
