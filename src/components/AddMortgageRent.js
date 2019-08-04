import React, { Component } from 'react'

export default class AddMortgageRent extends Component{
    constructor(){
        super()

        this.state = {
            mortgage: "",
            rent: ""
        }
        
    }
    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }
    render() {
        return(
            <div>
            <p>Monthly Mortgage Amount</p>
            <input onChange={e => this.handleChange('mortgage', e.target.value)} type="text"/>
            <p>Desired Monthly Rent</p>
            <input onChange={e => this.handleChange('rent', e.target.value)} type="text"/>
            </div>
        )
    }
}