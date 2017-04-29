import React from 'react';
import ReactDOM from 'react-dom';
import LocaleProvider from 'antd/lib/locale-provider';
import enUS from 'antd/lib/locale-provider/en_US';

import StudentCard from './app/student/StudentCard';
import StudentCardList from './app/student/StudentCardList';
import TakenDepartmentList from './app/student/TakenDepartmentList';
import TakenDepartmentForm from './app/student/TakenDepartmentForm';
import TakenDepartmentDetail from './app/student/TakenDepartmentDetail';
import Workspace from './app/Workspace';

ReactDOM.render(
  // <StudentCard name="Yusuf" status="Active" />,
  // <StudentCardList />,
  // <TakenDepartmentList />,
  <LocaleProvider locale={enUS}><TakenDepartmentDetail /></LocaleProvider>,
  // <Workspace />,
  document.getElementById('app'),
);
