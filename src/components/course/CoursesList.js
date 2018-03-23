import React, {PropTypes} from 'react';
import CourseListRow from './CourseListRow';

const CoursesList = ({courses, deleteCourse}) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>&nbsp;</th>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Category</th>
                    <th>Length</th>
                    <th></th>
                </tr>
            </thead>
            <tbody> 
                {courses.map(course =>
                    <CourseListRow key={course.Id} course={course} deleteCourse={deleteCourse}/>
                )}
            </tbody>
        </table>
    );
};

CoursesList.propTypes = {
    courses: PropTypes.array.isRequired,
    deleteCourse: PropTypes.func.isRequired
};

export default CoursesList;