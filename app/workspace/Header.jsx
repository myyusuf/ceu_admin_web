
import React from 'react';

const Header = ({ pageTitle }) => {
  return (
    <div className="workspace-header">
      <img className="logo" src="assets/images/small_logo.png" alt="Logo" />
      <span className="app-name">CEU</span>
      <span className="page-title">{pageTitle}</span>
      <nav>
        <ul>
          <li><img src="assets/images/icons/user.png" alt="menu" /></li>
          <li><img src="assets/images/icons/settings.png" alt="menu" /></li>
        </ul>
      </nav>
    </div>
  );
};

Header.propTypes = {
  pageTitle: React.PropTypes.string,
};

Header.defaultProps = {
  pageTitle: '',
};

export default Header;
