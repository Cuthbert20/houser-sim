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
                            <h6>{home.house_name}</h6>
                            <p>{home.house_address}</p>
                            <p>{home.city} {home.state} {home.zipcode}</p>
                            <img src={home.image} alt=""/>
                            <button onClick={() => this.props.delete(home.house_id)} >Delete</button>
                        </div>
                    )
                })}
            </div>
        )
    }
}