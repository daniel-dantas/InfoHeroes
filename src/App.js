import React, {Component} from 'react';
import Navbar from './components/NavBar'
import Card from './components/Card'

class App extends Component{
  constructor(){
    super()
    this.state={
      card: {
        id: 1,
        caminhoImagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg',
        nomeHeroi: 'Iron Man'
      }
    }
  }
  render(){
    return (
      <div id="app">
        <Navbar />
        <div className="row">
          <div className="col s12 m4"></div>
          <div className="col s12 m4">
            <Card card={this.state.card}/>
          </div>
          <div className="col s12 m4"></div>

        </div>
      </div>
      
    )
  }
}

export default App;
