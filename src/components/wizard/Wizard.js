import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import AddHouse from '../AddHouse'
import AddImage from '../AddImage'
import AddMortgageRent from '../AddMortgageRent'
import store, { CANCEL } from '../../store'

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            
        }

    }
    // cancel(){
    //     store.dispatch({
    //         type: CANCEL
    //     })
    // }
    render() {
        return (
                <Switch>
                <Route component={ AddHouse } exact path='/wizard/step1' /> 
                {/* <Link to="/wizard/step1" >Step 1</Link> */}
               <Route component={ AddImage } exact path="/wizard/step2" />
                {/* <Link to="/wizard/step2" >Step 2</Link> */}
                <Route component={ AddMortgageRent } exact path='/wizard/step3' />
                {/* <Link to="/wizard/step3" >Step 3</Link> */}
                {/* <button onClick={this.cancel} >Cancel</button> */}
                
                </Switch>
            //    {/* <Link to="/" ><button>Cancel</button></Link>
            //    <Link to='/addimage' ><button>Next</button></Link> */}
                
        )
    }
}