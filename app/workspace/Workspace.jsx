
import React from 'react';

const Workspace = () => {
  return (
    <div className="workspace-header">
      <img className="logo" src="assets/images/small_logo.png" alt="Logo" />
      <span className="app-name">CEU</span>
      <nav>
        <ul>
          <li><img src="assets/images/icons/settings.png" alt="menu" /></li>
        </ul>
      </nav>
    </div>
  );
};

export default Workspace;
