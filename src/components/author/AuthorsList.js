import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorsList = ({authors, deleteAuthor}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>First name</th>
                    <th>Last name</th>
                    <th></th>
                </tr>
            </thead>
            <tbody> 
                {authors.map(author =>
                    <AuthorListRow key={author.id} author={author} deleteAuthor={deleteAuthor}/>
                )}
            </tbody>
        </table>
    );
};

AuthorsList.propTypes = {
    authors: PropTypes.array.isRequired,
    deleteAuthor: PropTypes.func.isRequired
};

export default AuthorsList;