import React from 'react';
import ReactDOM from 'react-dom';

import StudentCard from './app/student/StudentCard';
import StudentCardList from './app/student/StudentCardList';
import Workspace from './app/Workspace';

ReactDOM.render(
  // <StudentCard name="Yusuf" status="Active" />,
  <StudentCardList />,
  // <Workspace />,
  document.getElementById('app'),
);
