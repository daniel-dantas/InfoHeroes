import React, {Component} from 'react'
import SearchBar from './components/SearchBar'
import Card from './components/Card'
import Container from './components/Container'
import Heroe from './services/Heroe'

class App extends Component{
  state={
    heroi: null
  }
  
  searchHeroe = (valorPesquisa) => {
    
    Heroe.search(valorPesquisa).then(resposta => {
      if(resposta.data.response === 'error'){
        alert('Heroi inesistente!')
      }else{
        this.setState({heroi: resposta.data.results[0]})
      }
    })


  }

  
  render(){
    return (
      <div id="app">
        <SearchBar getPesquisa={this.searchHeroe}/>
        <div className="row">
          <div className="col s12 m4">
          </div>
          <div className="col s12 m4">
            
            {this.state.heroi === null ? (
              <Container/>
            ) : (
              <Card card={this.state.heroi}/>

            )}

          </div>
          <div className="col s12 m4"></div>

        </div>
      </div>
      
    )
  }
}

export default App;
