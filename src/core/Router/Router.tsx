import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from '../LandingPage'
import ResultsPage from '../ResultsPage'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/results" component={ResultsPage} />
      </Switch>
    </BrowserRouter>
  )
}
