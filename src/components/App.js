import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Header from './common/Header';
import LoadingDots from './common/LoadingDots';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Header />
        {this.props.children}
        {this.props.loading && <LoadingDots type="bubbles" color="#337ab7" />}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};

function mapStateToProps (state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0
  };
}

export default connect(mapStateToProps)(App);
