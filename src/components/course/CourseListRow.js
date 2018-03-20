import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const CourseListRow = ({course, deleteCourse}) => {
    const deleteHandler = () => {
        deleteCourse(course.id);
    };

    return (
        <tr>
            <td><a href={course.watchHref} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.id}>{course.title}</Link></td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
            <td>{course.length}</td>
            <td><span className="glyphicon glyphicon-trash delete-action" onClick={deleteHandler}></span></td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired,
    deleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;