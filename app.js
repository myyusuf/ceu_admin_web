import React from 'react';
import ReactDOM from 'react-dom';

import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

// import DatePicker from 'antd/lib/date-picker';

import Workspace from './app/workspace/Workspace';

ReactDOM.render(
  <LocaleProvider locale={enUS}><Workspace /></LocaleProvider>,
  document.getElementById('app')
);
