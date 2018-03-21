import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const CourseListRow = ({course, deleteCourse}) => {
    const deleteHandler = () => {
        deleteCourse(course.Id);
    };

    return (
        <tr>
            <td><a href={course.Url} target="_blank">Watch</a></td>
            <td><Link to={'/course/' + course.Id}>{course.Title}</Link></td>
            <td>{course.AuthorName}</td>
            <td>{course.CategoryTitle}</td>
            <td>{course.Length}</td>
            <td><span className="glyphicon glyphicon-trash delete-action" onClick={deleteHandler}></span></td>
        </tr>
    );
};

CourseListRow.propTypes = {
    course: PropTypes.object.isRequired,
    deleteCourse: PropTypes.func.isRequired
};

export default CourseListRow;