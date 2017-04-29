
import React from 'react';

const Workspace = () => {
  return (
    <div className="workspace-header">
      <img className="logo" src="assets/images/small_logo.png" alt="Logo" />
      <span className="app-name">CEU</span>
      <nav>
        <ul>
          <a href="#"><li>Home</li></a>
          <a href="#"><li>About</li></a>
          <a href="#"><li>Contact</li></a>
        </ul>
      </nav>
    </div>
  );
};

export default Workspace;
