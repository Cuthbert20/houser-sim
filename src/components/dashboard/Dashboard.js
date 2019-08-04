import React, { Component } from 'react'
import House from '../house/House'
import { Switch, Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(){
        super()

        this.state = {
            house: []
        }
        this.deleteHouse = this.deleteHouse.bind(this)
    }
    componentDidMount(){
        // console.log('hit')
        axios.get('/api/homes')
        .then(res => {
            console.log('hit')
            this.setState({
                house: res.data
            })
        })
    }
    deleteHouse(id) {
        axios.delete(`/api/homes/${id}`)
        .then(res => {
            console.log(res.data)
            this.setState({
                house: res.data
            })
        })
    }
    // getAllHouse() {
    //     axios.get('/api/homes')
    //     .then(res => {
    //         console.log(res.data)
    //         this.setState({
    //             house: res.data
    //         })
    //     })
    // }
    render() {
        let houses = this.state.house.map(elm => (
            <div>
            <h2>{elm.house_name}</h2>
        <h6>{elm.house_address}</h6>
        <h6>{elm.city}</h6>
        <h6>{elm.state} {elm.zipcode}</h6>
            </div>
        ))
        return (
            <div>
                Dashboard is where you are now
                <House key={this.state.house.house_id}  house={this.state.house} delete={this.deleteHouse} />
                {/* {houses} */}
                <Switch>
                    <Link to="/wizard" ><button>Add New Property</button></Link>
                </Switch>
            </div>
        )
    }
}
