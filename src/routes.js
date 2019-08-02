import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Dashboard from '../src/components/dashboard/Dashboard'
import Wizard from '../src/components/wizard/Wizard'

export default (
    <Switch>
        <Route component={ Dashboard } path="/" exact />
        <Route component={ Wizard } path="/wizard" />
    </Switch>
)