import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import loginForm from './components/loginForm';
import firstPage from './components/firstPage';
import secondPage from './components/secondPage.jsx';
import home from './components/home';
import './App.css';

class App extends Component {
  
  render(){
    return (
      <>
          <NavBar/>
          <main className="container">
          <Switch>
            <Route path="/first" component={firstPage}/>
            <Route path="/second" component={secondPage}/>
            <Route path="/counters" component={home}/>
            <Route path="/login" component={loginForm}/>
            <Route path="/" exact component={home}/>
          </Switch>
           
          </main>
      </>
    );
  }
}

export default App;
