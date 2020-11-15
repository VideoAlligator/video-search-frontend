import React, { FC } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import LandingPage from '../LandingPage'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
      </Switch>
    </BrowserRouter>
  )
}
