import React, { Component } from 'react';
import Navbar from './components/Header/Navbar';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './components/Pages/Home';
import Events from './components/Pages/Events/Events';
import Shop from './components/Pages/Shop/Shop';
import Contact from './components/Pages/Contact/Contact';

class App extends Component {
  state = {  }
  render() { 
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/events' component={Events} />
          <Route path='/shop' component={Shop} />
          <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </BrowserRouter>
     );
  }
}
 
export default App;


