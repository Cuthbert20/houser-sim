import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
            price: ''
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
        const { name, address, price } =  this.state
        // const body = {name: name, address: address, price: price}
        console.log(name)
        axios.post('/api/homes', {house_name: name, house_price: price, house_address: address})
        // console.log(name,"name")
        .then(home => {
            console.log(home.data[0].house_name)
            this.setState({
                name: "",
                address: "",
                price: ""
                        })
            
        })
    }
    render() {
        return (
            <div>
                <input onChange={e => this.handleChange('name', e.target.value)} placeholder="name" type="text"/>
                <input onChange={e => this.handleChange('address', e.target.value)}  placeholder='address' type="text"/>
                <input onChange={e => this.handleChange('price', e.target.value)} placeholder='price' type="text"/>
                <button onClick={this.newHome} > submit </button>
                {/* <input onChange={e => this.handleChange('city', e.target.value)} placeholder='city' type="text"/> */}
                {/* <input onChange={e => this.handleChange('state', e.target.value)} placeholder='state' type="text"/> */}
                {/* <input onChange={e => this.handleChange('zipcode', e.target.value)} placeholder='zipcode' type="text"/> */}
               <Link to="/" ><button>Cancel</button></Link> 
            </div>
        )
    }
}
