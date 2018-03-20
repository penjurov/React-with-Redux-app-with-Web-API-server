import React, {PropTypes} from 'react';

const CategoryListRow = ({category, deleteCategory}) => {
    const deleteHandler = () => {
        deleteCategory(category.id);
    };

    return (
        <tr>
            <td>{category.id}</td>
            <td>{category.title}</td>
            <td><span className="glyphicon glyphicon-trash delete-action" onClick={deleteHandler}></span></td>
        </tr>
    );
};

CategoryListRow.propTypes = {
    category: PropTypes.object.isRequired,
    deleteCategory: PropTypes.func.isRequired
};

export default CategoryListRow;