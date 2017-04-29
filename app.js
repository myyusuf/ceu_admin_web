import React from 'react';
import ReactDOM from 'react-dom';

import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

import {
  HashRouter,
  Route,
  Link
} from 'react-router-dom';


import Workspace from './app/workspace/Workspace';

// ReactDOM.render(
//   <LocaleProvider locale={enUS}><Workspace /></LocaleProvider>,
//   document.getElementById('app')
// );

ReactDOM.render(
  <HashRouter>
    <Route path="/" component={Workspace} />
  </HashRouter>,
  document.getElementById('app')
);
