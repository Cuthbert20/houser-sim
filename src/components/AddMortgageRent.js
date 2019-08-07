import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import store, { STEP_THREE } from '../store'
import axios from 'axios'

export default class AddMortgageRent extends Component{
    constructor(){
        super()
        const reduxState = store.getState()
        this.state = {
            mortgage: reduxState.mortgage,
            rent: reduxState.rent
        }
        
    }
    handleChange(prop, val){
        this.setState({
            [prop]: val
        })
    }
    submit = () => {
        console.log(store)
        store.dispatch({
            type: STEP_THREE,
            payload: this.state
        })
        let reduxState = store.getState();
        console.log(reduxState)
        axios.post('/api/homes', reduxState).catch(err => alert(err, "somethings wrong bro"))
    }
    render() {
        return(
            <div>
            <p>Monthly Mortgage Amount</p>
            <input onChange={e => this.handleChange('mortgage', e.target.value)} value={this.state.mortgage} type="text"/>
            <p>Desired Monthly Rent</p>
            <input onChange={e => this.handleChange('rent', e.target.value)} value={this.state.rent} type="text"/>
            <br/>
            <Link to="/wizard/step2" ><button>Step 2</button></Link>
            <button onClick={this.submit} >Submit</button>
            </div>
        )
    }
}