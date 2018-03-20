import React, {PropTypes} from 'react';

const AuthorListRow = ({author, deleteAuthor}) => {
    const deleteHandler = () => {
        deleteAuthor(author.id);
    };

    return (
        <tr>
            <td>{author.id}</td>
            <td>{author.firstName}</td>
            <td>{author.lastName}</td>
            <td><span className="glyphicon glyphicon-trash delete-action" onClick={deleteHandler}></span></td>
        </tr>
    );
};

AuthorListRow.propTypes = {
    author: PropTypes.object.isRequired,
    deleteAuthor: PropTypes.func.isRequired
};

export default AuthorListRow;