import React, { Component } from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'
import store, { STEP_TWO } from '../store'


export default class AddImage extends Component {
    constructor(props) {
        super(props)
        const reduxState = store.getState()
        console.log(reduxState)
        this.state = {
            image: reduxState.image
        }
    }
    handleChange(prop,val){
        //prop is image assgined below in our handle change
        //val is what we type in to the input
        // console.log("prop", prop)
        // console.log('val', val)
        this.setState({
            [prop]: val
        })
    }
    stepThree = () => {
        store.dispatch({
            type: STEP_TWO,
            payload: this.state
        })
    }
    render() {
        return(
            <div>
                <input onChange={e => this.handleChange('image', e.target.value)} value={this.state.image} placeholder="House Image" type="text"/>
                <br/> 
                 <Link to="/wizard/step1" ><button>Step 1</button> </Link>
                 <span>   </span>   
                <Link to="/wizard/step3" ><button onClick={this.stepThree} >Step 3</button></Link>
                
            </div>
            )
    }
}