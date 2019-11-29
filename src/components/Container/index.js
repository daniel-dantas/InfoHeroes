import React from 'react'

class Container extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div id="container">
                <div className="row">
                    <div className="card">
                        <div className="card-content">
                            <span>Info Heros</span>
                            <p>
                                Informações sobre herois DC e MARVEL
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Container