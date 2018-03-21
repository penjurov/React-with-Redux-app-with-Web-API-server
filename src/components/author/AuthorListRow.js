import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const AuthorListRow = ({author, deleteAuthor}) => {
    const deleteHandler = () => {
        deleteAuthor(author.Id);
    };

    return (
        <tr>
            <td>{author.Id}</td>
            <td><Link to={'/author/' + author.Id}>{author.FullName}</Link></td>
            <td><span className="glyphicon glyphicon-trash delete-action" onClick={deleteHandler}></span></td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired,
    deleteAuthor: PropTypes.func.isRequired
};

export default AuthorListRow;