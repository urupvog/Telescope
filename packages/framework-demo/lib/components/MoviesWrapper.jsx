/* 

Wrapper for the Movies components

*/

import React, { PropTypes, Component } from 'react';
import { Components, registerComponent } from 'meteor/nova:core';

class MoviesWrapper extends Component {
  render() {
    return (
      <div className="wrapper framework-demo">

        <div className="header">
          <Components.AccountsForm />
        </div>        
        
        <div className="main">
          <Components.MoviesList />
        </div>

      </div>
    )
  }
}

registerComponent('MoviesWrapper', MoviesWrapper);
