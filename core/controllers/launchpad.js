//
// (c) 2016-XX, PJ$
// me@pjstein.co
// Bits & Peace
//
// core/controllers/launchpad.js
//

'use strict';

const React = require('react');

// Launchpad -------------------------------------------------------------------
class Launchpad extends React.Component {

  render() {
    return (
      <div>
        <h1>Welcome to Bits & Peace, commander</h1>
        <p>Make something rad</p>
      </div>
    )
  }

}

module.exports = { Launchpad : Launchpad };

