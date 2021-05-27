import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Header } from './cmps/Header'


export function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Switch>
          {routes.map(route => <Route key={route.path} exact component={route.component} path={route.path} />)}
        </Switch>
      </main>
      <footer>
        Starter
        </footer>
    </div>
  )
}

