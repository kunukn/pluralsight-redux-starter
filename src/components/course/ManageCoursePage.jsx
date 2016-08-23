import * as React from 'react';
import {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as coursesActions from '../../actions/courseActions';
import CourseList from './CourseList';

class ManageCoursePage extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const {courses} = this.props;

    return (
      <div>
        ManageCoursesPage
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
};

function mapStateToProps(state, ownProps){
  return {
    state: state
  };
}


function mapDispatchToProps(dispatch){
  return {
    actions: bindActionCreators(coursesActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
