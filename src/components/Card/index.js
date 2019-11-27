import React, {Component} from 'react'
import './styles.css'


class Card extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div id="card">
                <div className="row">
                    <div className="col s12">
                        <div className="card">
                            <div className="card-image waves-effect waves-block waves-light">
                                <img className="activator" src={this.props.card.caminhoImagem}/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{this.props.card.nomeHeroi}<i class="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                                <span class="card-title grey-text text-darken-4">{this.props.card.nomeHeroi}<i class="material-icons right">close</i></span>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Card