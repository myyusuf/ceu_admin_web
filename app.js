import React from 'react';
import ReactDOM from 'react-dom';

import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

import StudentCardList from './app/student/StudentCardList';
import Dashboard from './app/dashboard/Dashboard';

import {
  HashRouter,
  Route,
  Link,
} from 'react-router-dom';


import Workspace from './app/workspace/Workspace';

// ReactDOM.render(
//   <LocaleProvider locale={enUS}><Workspace /></LocaleProvider>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <HashRouter>
    <Workspace>
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/student" component={StudentCardList} />
    </Workspace>
  </HashRouter>,
  document.getElementById('app')
);
