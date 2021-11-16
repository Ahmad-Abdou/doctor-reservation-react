import "./App.css";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import DateTime from "./components/DateTime";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Signin></Signin>
          </Route>
          <Route path="/signin">
            <Signin></Signin>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/dashboard">
            <Dashboard></Dashboard>
          </Route>
          <Route path="/date">
            <DateTime></DateTime>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
