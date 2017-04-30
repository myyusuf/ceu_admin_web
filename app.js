import React from 'react';
import ReactDOM from 'react-dom';

import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

import StudentCardList from './app/student/StudentCardList';
import StudentDetail from './app/student/StudentDetail';
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
    <LocaleProvider locale={enUS}>
      <Workspace>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/student" component={StudentCardList} />
        <Route path="/studentdetail/:studentId" component={StudentDetail} />
      </Workspace>
    </LocaleProvider>
  </HashRouter>,
  document.getElementById('app')
);
