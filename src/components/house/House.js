import React, {Component} from 'react'


export default class House extends Component {
    constructor(){
        super()
        this.state = {
            house: {}

        }
    }
    componentDidUpdate(prevProps) {
        if(prevProps !== this.props){
            this.setState({house: {}})
        }
    }
    render() {
        return(
            <div>
                House
                {this.props.house.map(home => {
                    console.log(home)
                    return (
                        <div key={home.house_id} >
                            <h3>{home.house_name}</h3>
                            <h4>{home.house_address}</h4>
                            <h4>{home.house_price}</h4>
                            <button onClick={() => this.props.delete(home.house_id)} >Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}