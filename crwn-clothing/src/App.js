import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Login from './pages/login/Login';


function App() {
  return (
    <div >
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={Shop} />
        <Route path="/login" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
