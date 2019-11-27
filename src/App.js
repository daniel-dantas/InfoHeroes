import React, {Component} from 'react';
import Navbar from './components/NavBar'

class App extends Component{
  render(){
    return (
      <div id="app">
        <Navbar />
        <center>
          <h1>Hello React</h1>
        </center>
      </div>
      
    )
  }
}

export default App;
