import React, { Component } from 'react'
import axios from 'axios'

export default class AddHouse extends Component {
    constructor(){
        super()

        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
        }
        this.newHome = this.newHome.bind(this)
        
    }
    handleChange(prop,val) {
        console.log('val', val)
        this.setState({
            [prop]: val
        })
    }
    newHome() {
        console.log('hit')
        const { name, address, city, state, zipcode } =  this.state
        // const body = {name: name, address: address}
        console.log(name)
        axios.post('/api/homes', {house_name: name, house_address: address, city: city, state: state, zipcode: zipcode})
        // console.log(name,"name")
        .then(home => {
            console.log(home.data[0].house_name)
            this.setState({
                name: "",
                address: "",
                city: '',
                state: '',
                zipcode: ''
                        })
            
        })
    }
    render(){
        return(
            <div>
                <p>Name</p>
                <input onChange={e => this.handleChange('name', e.target.value)} placeholder="name" type="text"/>
                <p>Address</p>
                <input onChange={e => this.handleChange('address', e.target.value)}  placeholder='address' type="text"/>
                <p>City</p>
                <input onChange={e => this.handleChange('city', e.target.value)} placeholder="city" type="text"/>
                <p>State</p>
                <input onChange={e => this.handleChange('state', e.target.value)} placeholder="state" type="text"/>
                <p>Zipcode</p>
                <input onChange={e => this.handleChange('zipcode', e.target.value)} placeholder="zipcode" type="text"/>
                <hr/>
                <button onClick={this.newHome} > submit </button>
            </div>
        )
    }
}