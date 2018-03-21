import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as categoryActions from '../../actions/categoryActions';
import CategoriesList from './CategoriesList';
import toastr from "toastr";

class CategoriesPage extends React.Component{
    constructor(props, context) {
        super(props, context);

        this.deleteCategory = this.deleteCategory.bind(this);
    }

    componentWillMount() {
        this.props.actions.loadCategories();
    }

    categoryRow(category, index) {
        return <div key={index}>{category.Title}</div>;
    }

    deleteCategory(categoryId) {
        if (!this.isCategoryInUse(categoryId)) {
            this.props.actions.deleteCategory(categoryId)
            .then(() => {
                toastr.success('Category deleted');
            })
            .catch(error => {
                toastr.error(error);
            });
        } else {
            toastr.error('Cannot delete category used in courses');
        }
    }

    isCategoryInUse(categoryId) {
        return this.props.courses.some(function (course) {
            return course.CategoryId === categoryId;
        });
    }

    render() {
        const {categories} = this.props;
        return(
            <div>
                <CategoriesList categories = {categories} deleteCategory = {this.deleteCategory} />
            </div>
        );
    }
}

CategoriesPage.propTypes = {
    categories: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps){
    return {
        categories: state.categories,
        courses: state.courses
    };
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(categoryActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps) (CategoriesPage);

