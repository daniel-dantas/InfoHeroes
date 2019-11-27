import React from 'react'

class NavBar extends React.Component{

    render(){
        return (
            <div id="navbar">
                 <nav>
                    <div className="nav-wrapper  blue darken-4">
                        <form>
                            <div className="input-field">
                            <input id="search" type="search" required placeholder="Digite aqui o nome do heroi"/>
                            <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                            <i className="material-icons">close</i>
                            </div>
                        </form>
                    </div>
                </nav>
            </div>
        )
    }

}

export default NavBar
