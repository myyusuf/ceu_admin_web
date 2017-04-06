import React from 'react';
import ReactDOM from 'react-dom';

import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

import DatePicker from 'antd/lib/date-picker';

ReactDOM.render(
  <LocaleProvider locale={enUS}><DatePicker /></LocaleProvider>,
  document.getElementById('app')
);
