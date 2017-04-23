import React from 'react';
import ReactDOM from 'react-dom';

import Form from 'antd/lib/form';

import StudentCard from './app/student/StudentCard';
import StudentCardList from './app/student/StudentCardList';
import TakenDivisionList from './app/student/TakenDivisionList';
import TakenDivisionForm from './app/student/TakenDivisionForm';
import Workspace from './app/Workspace';

const WrappedForm = Form.create()(TakenDivisionForm);

ReactDOM.render(
  // <StudentCard name="Yusuf" status="Active" />,
  // <StudentCardList />,
  // <TakenDivisionList />,
  <WrappedForm />,
  // <Workspace />,
  document.getElementById('app'),
);
