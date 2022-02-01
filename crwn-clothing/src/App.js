import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Homepage from './pages/homepage/Homepage';
import Shop from './pages/shop/Shop';
import Login from './pages/login/Login';
import { auth } from './firebase/firebase-utils';


class App extends React.Component {
  state = {
    currentUser: null
  }

  componentDidMount() {
    auth.onAuthStateChanged(user => {
      this.setState({ currentUser: user });

      console.log(user);
    })
  }

  unsubscribeFromAuth = null;

  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={Shop} />
          <Route path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
  
}

export default App;
