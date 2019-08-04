import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import AddHouse from '../AddHouse'
import AddImage from '../AddImage'
import AddMortgageRent from '../AddMortgageRent'

export default class Wizard extends Component {
    constructor(){
        super()
        this.state = {
            
        }

    }
    render() {
        return (
                <Switch>
                <Route component={ AddHouse } path='/wizard/step1' /> 
                <Link to="/wizard/step1" ><button>Step 1</button></Link>
               <Route component={ AddImage } path="/wizard/step2" />
                <Link to="/wizard/step2" ><button>Step 2</button></Link>
                <Route component={ AddMortgageRent } path='/wizard/step3' />
                <Link to="/wizard/step3" ><button>Step 3</button></Link>
                </Switch>
            //    {/* <Link to="/" ><button>Cancel</button></Link>
            //    <Link to='/addimage' ><button>Next</button></Link> */}
                
        )
    }
}