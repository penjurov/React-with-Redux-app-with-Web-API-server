import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseForm from './CourseForm';
import ChapterModal  from './ChapterModal';
import toastr from 'toastr';
import {authorsFormattedForDropdown, categoriesFormattedForDropdown} from '../../selectors/selectors';

export class ManageCoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            course: Object.assign({}, props.course),
            chapter: Object.assign({}, props.chapter),
            errors: {},
            saving: false,
            shouldShowChapterModal: false,
            chapterErrors: {}
        };

        this.updateCourseState = this.updateCourseState.bind(this);
        this.saveCourse = this.saveCourse.bind(this);

        this.updateChapterState = this.updateChapterState.bind(this);
        this.showChapterModal = this.showChapterModal.bind(this);
        this.handleModalClose = this.handleModalClose.bind(this);
        this.addChapter = this.addChapter.bind(this);
        this.deleteChapter = this.deleteChapter.bind(this);
    }

    componentWillMount() {
        if(this.props.courseId) {
            this.props.actions.getCourse(this.props.courseId).then(course => {
                this.setState({course: course});
            });
        }
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
            errors.Title= 'Title must be at least 5 characters.';
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

    updateChapterState(event){
        const field = event.target.name;
        let chapter = Object.assign({}, this.state.chapter);
        chapter[field] = event.target.value;
        return this.setState({chapter: chapter});
    }

    showChapterModal(event) {
        event.preventDefault();
        this.setState({shouldShowChapterModal: true,
            chapter: {
                Id: '',
                Title: '',
                Length: ''
            }});
    }

    handleModalClose() {
        this.setState({
            shouldShowChapterModal: false,
          
        });
    }

    addChapter() {
        let chapter = Object.assign({}, this.state.chapter);
        let course = Object.assign({}, this.state.course);
        course.Chapters.push(chapter);
        this.setState({course: course});
        
        this.props.actions.chapterAdded(course);
        this.handleModalClose();
    }

    deleteChapter(chapterId) {
        let course = Object.assign({}, this.state.course);
        let chapters = course.Chapters.filter( chapter => chapter.Id !== chapterId);
        course.Chapters = chapters;
        this.setState({course: course});
    }

    redirect(){
        this.setState({saving: false});
        toastr.success('Course saved');
        this.context.router.history.push('/courses');
    }

    render() {
        return (
            <div>
                <ChapterModal 
                    chapter={this.state.chapter} 
                    onChange={this.updateChapterState}
                    errors={this.state.chapterErrors}
                    show={this.state.shouldShowChapterModal} 
                    handleClose={this.handleModalClose}
                    handleSave={this.addChapter}/>

                <CourseForm
                    allAuthors={this.props.authors}
                    allCategories={this.props.categories}
                    course={this.state.course}
                    title={this.state.course.Id ? 'Edit course' : 'Add course'}
                    errors={this.state.errors}
                    onChange={this.updateCourseState}
                    onSave={this.saveCourse}
                    onAddChapterClick={this.showChapterModal}
                    deleteChapter={this.deleteChapter}
                    saving = {this.state.saving}
                />
            </div>
        );
    }
}

ManageCoursePage.propTypes = {
    courseId: PropTypes.string,
    course: PropTypes.object.isRequired,
    chapter: PropTypes.object.isRequired,
    authors: PropTypes.array.isRequired,
    categories: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

ManageCoursePage.contextTypes = {
    router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
    const courseId = ownProps.match.params.id;
    let course = {
        Id: '',
        Url: '',
        Title: '',
        AuthorId: '',
        Length: '',
        CategoryId: '',
        Chapters: []
    };

    let chapter = {
        Id: '',
        Title: '',
        Length: ''
    };

    return {
        course: course,
        chapter: chapter,
        courseId: courseId,
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