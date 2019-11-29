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
                                <img className="activator" src={this.props.card.image.url}/>
                            </div>
                            <div className="card-content">
                                <span className="card-title activator grey-text text-darken-4">{this.props.card.name}<i className="material-icons right">more_vert</i></span>
                            </div>
                            <div className="card-reveal">
                                <span className="card-title grey-text text-darken-4">{this.props.card.name}<i className="material-icons right">close</i></span>
                                <br/>
                                <div id="atributes">
                                    <p>Power Stats</p>
                                    <ul>
                                        <li>Intelligence: {this.props.card.powerstats.intelligence}</li>
                                        <li>Durability: {this.props.card.powerstats.durability}</li>
                                        <li>Combat: {this.props.card.powerstats.combat}</li>
                                        <li>Power: {this.props.card.powerstats.power}</li>
                                        <li>Speed: {this.props.card.powerstats.speed}</li>
                                        <li>Strength: {this.props.card.powerstats.strength}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        )
    }
}

export default Card