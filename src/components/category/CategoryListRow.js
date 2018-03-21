import React, {PropTypes} from 'react';
import {Link} from 'react-router-dom';

const CategoryListRow = ({category, deleteCategory}) => {
    const deleteHandler = () => {
        deleteCategory(category.Id);
    };

    return (
        <tr>
            <td>{category.Id}</td>
            <td><Link to={'/category/' + category.Id}>{category.Title}</Link></td>
            <td><span className="glyphicon glyphicon-trash delete-action" onClick={deleteHandler}></span></td>
        </tr>
    );
};

CategoryListRow.propTypes = {
    category: PropTypes.object.isRequired,
    deleteCategory: PropTypes.func.isRequired
};

export default CategoryListRow;