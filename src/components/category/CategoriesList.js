import React, {PropTypes} from 'react';
import CategoryListRow from './CategoryListRow';

const CategoriesList = ({categories, deleteCategory}) => {
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th></th>
                </tr>
            </thead>
            <tbody> 
                {categories.map(category =>
                    <CategoryListRow key={category.Id} category={category} deleteCategory={deleteCategory}/>
                )}
            </tbody>
        </table>
    );
};

CategoriesList.propTypes = {
    categories: PropTypes.array.isRequired,
    deleteCategory: PropTypes.func.isRequired
};

export default CategoriesList;