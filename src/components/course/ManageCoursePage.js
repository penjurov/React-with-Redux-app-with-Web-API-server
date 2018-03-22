import React, { PropTypes } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as courseActions from "../../actions/courseActions";
import CourseForm from "./CourseForm";
import toastr from "toastr";
import {authorsFormattedForDropdown, categoriesFormattedForDropdown} from "../../selectors/selectors";

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            errors: {},
            saving: false
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);
    }

    componentWillReceiveProps(nextProps){
        if(this.props.course.Id != nextProps.course.Id){
            this.setState({course: Object.assign({}, nextProps.course)});
        }
    }

    updateCourseState(event){
        const field = event.target.name;
        let course = Object.assign({}, this.state.course);
        course[field] = event.target.value;
        return this.setState({course: course});
    }

    courseFormIsValid(){
        let formIsValid = true;
        let errors = {};

        if (this.state.course.Title.length < 5){
            errors.Title= "Title must be at least 5 characters.";
            formIsValid = false;
        }

        this.setState({errors: errors});
        return formIsValid;
    }

    saveCourse(event){
        event.preventDefault();

        if(!this.courseFormIsValid()){
            return;
        }

        this.setState({saving: true});

        this.props.actions.saveCourse(this.state.course)
            .then(() => this.redirect())
            .catch(error => {
                toastr.error(error);
                this.setState({saving: false});
            });
    } 

    redirect(){
        this.setState({saving: false});
        toastr.success('Course saved');
        this.context.router.history.push('/courses');
    }

    render() {
        return (
            <CourseForm
                allAuthors={this.props.authors}
                allCategories={this.props.categories}
                course={this.state.course}
                title={this.state.course.Id ? 'Edit course' : 'Add course'}
                errors={this.state.errors}
                onChange={this.updateCourseState}
                onSave={this.saveCourse}
                saving = {this.state.saving}
            />
        );
    }
}

ManageCoursePage.propTypes = {
    course: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function getCourseById(courses, id) {
    const course = courses.filter(course => course.Id == id);

    if(course){
        return course[0];
    }

    return null;
}

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id;
    let course = {
        Id: "",
        Url: "",
        Title: "",
        AuthorId: "",
        Length: "",
        CategoryId: ""
    };

    if(courseId && state.courses.length > 0){
        course = getCourseById(state.courses, courseId);
    }

    return {
        course: course,
        authors: authorsFormattedForDropdown(state.authors),
        categories: categoriesFormattedForDropdown(state.categories)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);