import React from 'react';
import ReactDOM from 'react-dom';

import Menu from './Menu';
import StudentCard from './app/student/StudentCard';

ReactDOM.render(
  <StudentCard name="Yusuf" status="Active"/>,
  document.getElementById('app')
);
