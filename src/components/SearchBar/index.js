import React from 'react'
import './style.css'

class SearchBar extends React.Component{
    
    constructor(props){
        super(props)
        this.state = {
            pesquisa: ''
        }

    }
    
    getPesq = (event) => {
        this.setState({pesquisa: event.target.value})
    }

    search = (event) => {
        this.props.getPesquisa(this.state.pesquisa)
        event.preventDefault()
    }

    retornaPesquisa(){
        return this.state.pesquisa
    }
    render(){
        return (
            <div id="navbar">
                 <nav>
                    <div className="nav-wrapper  blue darken-4">
                        <form onSubmit={this.search}>
                            <div className="input-field">
                                <input id="search"  type="search" onChange={this.getPesq} required placeholder="Digite aqui o nome do heroi"/>
                                <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                                <i className="material-icons">close</i>
                                <button className="oculto-button" type="submit"></button>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }

    
}

export default SearchBar
