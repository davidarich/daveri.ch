import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import './NameBanner.scss';

class NameBanner extends Component {
  render() {
    return (
      <CSSTransition
        appear={true}
        in={true}
        timeout={1200}
        classNames="dropfade"
        unmountOnExit
      >
        <div className="NameBanner">
          <span className="app-text-primary">DAVE</span>
          <span className="app-text-secondary-light">RICH</span>
        </div>
      </CSSTransition>
    );
  }
}

export default NameBanner;