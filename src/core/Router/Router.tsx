import ContactPage from 'core/ContactPage'
import React, { FC } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from '../LandingPage'
import ResultsPage from '../ResultsPage'
import VideoDetailsPage from '../VideoDetailsPage'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/contactus" component={ContactPage} />
        <Route exact path="/search" component={ResultsPage} />
        <Route exact path="/video/:videoId" component={VideoDetailsPage} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
