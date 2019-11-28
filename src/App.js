import React, {Component} from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'


class App extends Component{
  state={
    card: {
      id: 1,
      caminhoImagem: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e0/Iron_Man_bleeding_edge.jpg/250px-Iron_Man_bleeding_edge.jpg',
      nomeHeroi: 'Iron Man',
    },
    nomeHeroi: ''
  }
  
  getPesquisa = (valorPesquisa) => {
    this.setState({nomeHeroi: valorPesquisa})
  }

  render(){
    return (
      <div id="app">
        <SearchBar getPesquisa={this.getPesquisa} pesquisa='pesquisa'/>
        <div className="row">
          <div className="col s12 m4">
          </div>
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
