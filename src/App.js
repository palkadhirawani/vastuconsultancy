import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import AboutUs from './screens/AboutUs';
import Home from './Home';
import Vaastuportfolio from './Vaastuportfolio';
import Bookappointment from './Bookappointment';
import Contact from './Contact';
import Navbar from './Navbar';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    // <div className="App">
    //   <h1>Hello</h1>
    // </div>
    <Router>
    <div className="App">
    <Navbar />
    </div>
    <Switch>
        <Route path = "/" exact component = {Home}/>;
        <Route path = "/aboutus" exact component = {AboutUs}/>;
        <Route path = "/contact" exact component = {Contact}/>;
        <Route path = "/bookappointment" component = {Bookappointment}/>;
        <Route path = "/vaastuportfolio" component = {Vaastuportfolio}/>;
      </Switch>
    </Router>
  )
}

export default App;
