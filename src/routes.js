import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../src/components/dashboard/Dashboard'
import Wizard from '../src/components/wizard/Wizard'
import AddImage from '../src/components/AddImage'
import AddMortgageRent from '../src/components/AddMortgageRent'
import AddHouse from '../src/components/AddHouse'

export default (
    <Switch>
        <Route component={ Dashboard } path="/" exact />
        <Route component={ Wizard } path="/wizard" />
        <Route component={ AddImage } path="/step2" />
        <Route component={ AddMortgageRent } path='/step3' />
        <Route component={ AddHouse } path='/step1' />
    </Switch>
)