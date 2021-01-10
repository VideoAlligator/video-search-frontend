import React, { FC } from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

import LandingPage from '../LandingPage'
import ResultsPage from '../ResultsPage'
import MovieInfoPage from '../MovieInfoPage'

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/results" component={ResultsPage} />
        {/* <Route exact path="/movie-info/:id" component={MovieInfoPage} /> */}
        <Route
          path="/movie-info/:id"
          component={(props: { match: { params: { id: any } } }) => (
            <MovieInfoPage ID={props.match.params.id} />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  )
}
