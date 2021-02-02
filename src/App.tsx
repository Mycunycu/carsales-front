import React, { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { HomePage } from './views/pages/home';
import { RegisterPage } from './views/pages/register';

import './App.sass';

export const App: FC = () => {
  return (
    <Router>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/register' component={RegisterPage} />
    </Router>
  )
}
