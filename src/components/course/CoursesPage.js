import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CoursesList from './CoursesList';
import toastr from "toastr";

class CoursesPage extends React.Component{
    constructor(props, context){
        super(props, context);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    componentWillMount() {
        this.props.actions.loadCourses();
    }

    courseRow(course, index){
        return <div key={index}>{course.Title}</div>;
    }

    deleteCourse(courseId){
        this.props.actions.deleteCourse(courseId)
            .then(() => {
                toastr.success('Course deleted');
            })
            .catch(error => {
                toastr.error(error);
            });
    }

    render() {
        const {courses} = this.props;
        return(
            <div>
                <CoursesList courses = {courses} deleteCourse = {this.deleteCourse} />
            </div>
        );
    }
}

CoursesPage.propTypes = {
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (CoursesPage);

