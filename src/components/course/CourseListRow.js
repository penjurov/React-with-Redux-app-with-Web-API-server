import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const CourseListRow = ({course, deleteCourse}) => {
    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td><span className="glyphicon glyphicon-trash" onClick={() => { return deleteCourse(course.id)} }></span></td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired
};

export default CourseListRow;