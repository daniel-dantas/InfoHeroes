import React from 'react'
import './style.css'

class NavBar extends React.Component{

    clicandoBotao(){
        alert('oiii')
    }
    render(){
        return (
            <div id="navbar">
                 <nav>
                    <div className="nav-wrapper  blue darken-4">
                        <form onSubmit={this.clicandoBotao}>
                            <div className="input-field">
                            <input id="search" type="search" required placeholder="Digite aqui o nome do heroi"/>
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

export default NavBar
