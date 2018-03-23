import React, {PropTypes} from 'react';
import AuthorListRow from './AuthorListRow';

const AuthorsList = ({authors, deleteAuthor}) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Author</th>
                    <th></th>
                </tr>
            </thead>
            <tbody> 
                {authors.map(author =>
                    <AuthorListRow key={author.Id} author={author} deleteAuthor={deleteAuthor}/>
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