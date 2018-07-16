import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Nav.scss';

class Nav extends Component {
  render() {
    
    return (
      <CSSTransition
        appear={true}
        in={true}
        timeout={1200}
        classNames="dropfade"
        unmountOnExit
      >
        <nav className="Nav">
          HOME
          &nbsp;<span className="separator app-text-secondary-light">//</span>&nbsp;
          SKILLS
          &nbsp;<span className="separator app-text-secondary-light">//</span>&nbsp;
          WORK
          &nbsp;<span className="separator app-text-secondary-light">//</span>&nbsp;
          HOBBYS
        </nav>
      </CSSTransition>
    );
  }
}

export default Nav;