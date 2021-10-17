//import React libraries and components
import './App.css';
import { Component } from 'react';
import { Header } from './components/header';
import { Footer } from './components/footer';
import { Content } from './components/content';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav } from 'react-bootstrap';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Read } from './components/read';
import { Create } from './components/create';


//class App representing Component
class App extends Component {
  //render method needed for class to run
  render() {
    //returns div tag content and print to screen 
    return (
      //enables the navigation among views of various components in a React Application
      <Router>
        {/*div tag with bootstrap navbar*/}
        <div className="App">
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/read">Read</Nav.Link>
              <Nav.Link href="/create">Create</Nav.Link>
            </Nav>
          </Navbar>

          <br />
          {/*returns only first matching route*/}
          <Switch>
            {/*create links to different components and implements navigation*/}
            <Route path='/' component={Content} exact />
            <Route path='/read' component={Read} exact />
            <Route path='/create' component={Create} exact />
          </Switch>

        </div>
      </Router>
    );
  }//end render method
}//end class App

export default App;
