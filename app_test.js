import React from 'react';
import ReactDOM from 'react-dom';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

import StudentCard from './app/student/StudentCard';
import StudentCardList from './app/student/StudentCardList';
import TakenDivisionList from './app/student/TakenDivisionList';
import TakenDivisionForm from './app/student/TakenDivisionForm';
import TakenDivisionDetail from './app/student/TakenDivisionDetail';
import Workspace from './app/Workspace';

ReactDOM.render(
  // <StudentCard name="Yusuf" status="Active" />,
  // <StudentCardList />,
  // <TakenDivisionList />,
  <LocaleProvider locale={enUS}><TakenDivisionDetail /></LocaleProvider>,
  // <Workspace />,
  document.getElementById('app'),
);
