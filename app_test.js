import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';
import StudentCard from './app/student/StudentCard';
import Workspace from './app/Workspace';

ReactDOM.render(
  // <StudentCard name="Yusuf" status="Active"/>,
  <Workspace />,
  document.getElementById('app')
);
